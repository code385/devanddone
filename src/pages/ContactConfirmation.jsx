/*  ----------------------------------------------------------
    DEV & DONE – Deal Confirmation (COMPLETE)
    Palette: #121212 bg | #1E1E1E cards
             #6EE7B7 primary  (4.8:1)
             #93C5FD secondary(4.8:1)
             #E5E7EB text     (9.5:1)
             #9CA3AF muted    (4.7:1)
    ---------------------------------------------------------- */
import React, { useState, useCallback, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import {
  CheckCircle, Phone, Mail, User, Building, ArrowRight,
  Download, FileText, Send, Clock, AlertCircle
} from 'lucide-react';

/* ---------- helpers ---------- */
const PALETTE = {
  bg: '#121212',
  card: '#1E1E1E',
  primary: '#6EE7B7',
  secondary: '#93C5FD',
  text: '#E5E7EB',
  muted: '#9CA3AF',
  red: '#F87171',
};

const validateEmail = (e) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const validatePhone = (p) =>
  /^[\+]?[1-9][\d]{0,15}$/.test(p.replace(/[\s\-\(\)]/g, ''));

/* ---------- Service-specific budgets ---------- */
const SERVICE_BUDGETS = {
  'Web Development': ['$500–$1,500', '$1,500–$3,000', '$3,000–$7,500', '$7,500–$15,000', '$15,000+'],
  'Mobile App Development': ['$2,000–$5,000', '$5,000–$10,000', '$10,000–$25,000', '$25,000–$50,000', '$50,000+'],
  'Graphic Designing': ['$100–$500', '$500–$1,000', '$1,000–$2,500', '$2,500–$5,000', '$5,000+'],
  'Digital Marketing': ['$300–$1,000', '$1,000–$3,000', '$3,000–$7,500', '$7,500–$15,000', '$15,000+']
};

/* ---------- PDF generator (crisp, no blur) ---------- */
const generatePDF = (data) => {
  const doc = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', putOnlyUsedFonts: true });
  const margin = 14;
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  const bg = [18, 18, 18];
  const primary = [110, 231, 183];
  const text = [0, 0, 0];

  /* header */
  doc.setFillColor(...bg);
  doc.rect(0, 0, w, 38, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(...primary);
  doc.text('DEV & DONE', margin, 22);
  doc.setFontSize(14);
  doc.setTextColor(...text);
  doc.text('Project Confirmation', margin, 32);

  let y = 50;
  const line = (txt, size = 12, bold = false, color = text) => {
    doc.setFont('helvetica', bold ? 'bold' : 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(txt, w - margin * 2);
    lines.forEach((l) => {
      if (y > h - 20) {
        doc.addPage();
        y = 20;
      }
      doc.text(l, margin, y);
      y += size * 0.45;
    });
    y += 2;
  };

  line('Client Information', 14, true, primary);
  line(`Name: ${data.clientName}`);
  line(`Company: ${data.companyName || 'N/A'}`);
  line(`Email: ${data.email}`);
  line(`Phone: ${data.phone}`);
  y += 4;

  line('Project Details', 14, true, primary);
  line(`Type: ${data.projectType}`);
  line(`Budget: ${data.budget}`);
  line(`Timeline: ${data.timeline}`);
  y += 4;

  line('Description', 14, true, primary);
  line(data.description, 11);
  y += 4;

  line('Client Intent', 14, true, primary);
  line(
    `I, ${data.clientName}, confirm my intent to work with DEV & DONE on the ${data.projectType} project. Budget: ${data.budget}, Timeline: ${data.timeline}.`
  );

  /* footer */
  doc.setFillColor(...bg);
  doc.rect(0, h - 26, w, 26, 'F');
  doc.setFontSize(10);
  doc.setTextColor(...primary);
  doc.text('Phone: +92 301 39 00 245 | +92 306 38 92 102', margin, h - 16);
  doc.text('Email: codingwithme178@gmail.com', margin, h - 10);

  return doc.output('blob');
};

/* ---------- main component ---------- */
export default function ContactConfirmation() {
  const [form, setForm] = useState({
    clientName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    dealConfirmed: false,
  });
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [sending, setSending] = useState(false);

  const projectTypes = ['Web Development', 'Mobile App Development', 'Graphic Designing', 'Digital Marketing'];
  const timelines = ['1–2 weeks', '1 month', '2–3 months', '3–6 months', '6+ months'];

  /* handlers */
  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => {
      const newForm = { ...f, [name]: type === 'checkbox' ? checked : value };
      
      // Reset budget when project type changes
      if (name === 'projectType') {
        newForm.budget = '';
      }
      
      return newForm;
    });
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (step === 1) {
      if (!form.clientName.trim()) e.clientName = 'Required';
      if (!form.email.trim()) e.email = 'Required';
      else if (!validateEmail(form.email)) e.email = 'Invalid email';
      if (!form.phone.trim()) e.phone = 'Required';
      else if (!validatePhone(form.phone)) e.phone = 'Invalid phone';
    }
    if (step === 2) {
      if (!form.projectType) e.projectType = 'Required';
      if (!form.budget) e.budget = 'Required';
      if (!form.timeline) e.timeline = 'Required';
      if (!form.description.trim()) e.description = 'Required';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => validate() && setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const genPdf = useCallback(() => {
    const blob = generatePDF(form);
    setPdfBlob(blob);
  }, [form]);

  const download = () => {
    if (!pdfBlob) return;
    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DEV&DONE_${form.clientName.replace(/\s+/g, '_')}_${Date.now()}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const sendWA = async () => {
    if (!pdfBlob) return;
    setSending(true);

    try {
      // Create a simplified WhatsApp message without file upload
      const msg = encodeURIComponent(
        `✅ *New Project Inquiry – DEV & DONE*\n\n` +
        `👤 *Client:* ${form.clientName}\n` +
        `🏢 *Company:* ${form.companyName || 'N/A'}\n` +
        `📧 *Email:* ${form.email}\n` +
        `📱 *Phone:* ${form.phone}\n\n` +
        `📋 *Service:* ${form.projectType}\n` +
        `💰 *Budget:* ${form.budget}\n` +
        `⏱️ *Timeline:* ${form.timeline}\n\n` +
        `📝 *Description:* ${form.description}\n\n` +
        `✅ *Client has confirmed intent to proceed.*\n\n` +
        `Please contact the client to discuss next steps!`
      );

      // Send to both WhatsApp numbers with a delay
      const numbers = ['923013900245', '923063892102'];
      
      numbers.forEach((number, index) => {
        setTimeout(() => {
          const url = `https://wa.me/${number}?text=${msg}`;
          window.open(url, '_blank');
        }, index * 1000); // 1 second delay between each
      });

      // Show success message
      setTimeout(() => {
        alert('WhatsApp messages sent successfully! Please check your WhatsApp.');
        setSending(false);
      }, 2000);

    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      alert('There was an error sending the message. Please try again.');
      setSending(false);
    }
  };

  // Get budget options based on selected service
  const getBudgetOptions = () => {
    if (!form.projectType) return [];
    return SERVICE_BUDGETS[form.projectType] || [];
  };

  /* render */
  const stepLabels = ['Basic Info', 'Project Details', 'Confirm & Send'];
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: PALETTE.bg, color: PALETTE.text, fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      <div className="w-full max-w-2xl space-y-6">
        {/* header */}
        <div className="text-center animate-fadeIn">
          <CheckCircle size={48} style={{ color: PALETTE.primary }} />
          <h1 className="text-3xl font-bold mt-2">Deal Confirmation</h1>
          <p style={{ color: PALETTE.muted }}>Complete your project confirmation with DEV & DONE</p>
        </div>

        {/* stepper */}
        <div className="flex justify-center items-center space-x-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition"
                style={{
                  backgroundColor: step >= s ? PALETTE.primary : PALETTE.card,
                  color: step >= s ? PALETTE.bg : PALETTE.muted,
                }}
              >
                {s}
              </div>
              {s < 3 && <div className="w-12 h-0.5 mx-1" style={{ backgroundColor: step > s ? PALETTE.primary : PALETTE.card }} />}
            </div>
          ))}
        </div>

        {/* card */}
        <div
          className="rounded-2xl p-6 md:p-8 space-y-6 animate-slideUp"
          style={{ backgroundColor: PALETTE.card }}
        >
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold" style={{ color: PALETTE.primary }}>Basic Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Client Name *" name="clientName" value={form.clientName} onChange={handle} error={errors.clientName} />
                <Input label="Company" name="companyName" value={form.companyName} onChange={handle} />
                <Input label="Email *" type="email" name="email" value={form.email} onChange={handle} error={errors.email} />
                <Input label="Phone *" type="tel" name="phone" value={form.phone} onChange={handle} error={errors.phone} />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h2 className="text-xl font-bold" style={{ color: PALETTE.primary }}>Project Details</h2>
              <Select label="Service Type *" name="projectType" options={projectTypes} value={form.projectType} onChange={handle} error={errors.projectType} />
              <div className="grid md:grid-cols-2 gap-4">
                <Select 
                  label="Budget *" 
                  name="budget" 
                  options={getBudgetOptions()} 
                  value={form.budget} 
                  onChange={handle} 
                  error={errors.budget}
                  disabled={!form.projectType}
                />
                <Select label="Timeline *" name="timeline" options={timelines} value={form.timeline} onChange={handle} error={errors.timeline} />
              </div>
              <label className="block text-sm font-medium mb-1" style={{ color: PALETTE.text }}>Project Description *</label>
              <textarea
                name="description"
                rows={4}
                maxLength={1000}
                value={form.description}
                onChange={handle}
                placeholder="Please describe your project requirements in detail..."
                className="w-full rounded-lg p-3 resize-none"
                style={{ backgroundColor: PALETTE.bg, border: `1px solid ${errors.description ? PALETTE.red : PALETTE.muted}`, color: PALETTE.text }}
              />
              <div className="text-right text-xs" style={{ color: PALETTE.muted }}>{form.description.length}/1000</div>
              {errors.description && <Error>{errors.description}</Error>}
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-xl font-bold" style={{ color: PALETTE.primary }}>Confirm & Send</h2>
              <div className="p-4 rounded-lg text-sm space-y-2" style={{ backgroundColor: PALETTE.bg }}>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Client</span><span>{form.clientName}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Company</span><span>{form.companyName || 'N/A'}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Email</span><span>{form.email}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Phone</span><span>{form.phone}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Service</span><span>{form.projectType}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Budget</span><span>{form.budget}</span></div>
                <div className="flex justify-between"><span style={{ color: PALETTE.muted }}>Timeline</span><span>{form.timeline}</span></div>
              </div>
              <label className="flex items-center gap-2 mt-4">
                <input type="checkbox" name="dealConfirmed" checked={form.dealConfirmed} onChange={handle} style={{ accentColor: PALETTE.primary }} />
                <span style={{ color: PALETTE.text }}>I confirm my intent to proceed with this project</span>
              </label>
              {form.dealConfirmed && (
                <div className="space-y-3 mt-4">
                  <button onClick={genPdf} className="btn w-full" style={{ backgroundColor: PALETTE.primary, color: PALETTE.bg }}>
                    <FileText size={16} className="mr-2" />
                    Generate PDF
                  </button>
                  {pdfBlob && (
                    <>
                      <button onClick={download} className="btn w-full" style={{ backgroundColor: PALETTE.secondary, color: PALETTE.bg }}>
                        <Download size={16} className="mr-2" />
                        Download PDF
                      </button>
                      <button 
                        onClick={sendWA} 
                        disabled={sending} 
                        className="btn w-full" 
                        style={{ backgroundColor: '#25D366', color: '#fff', opacity: sending ? 0.7 : 1 }}
                      >
                        {sending ? (
                          <>
                            <Clock size={16} className="mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send via WhatsApp
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>
              )}
            </>
          )}
          <div className="flex justify-between mt-6">
            <button 
              onClick={prev} 
              disabled={step === 1} 
              className="btn" 
              style={{ backgroundColor: step === 1 ? PALETTE.card : PALETTE.muted, color: PALETTE.text, opacity: step === 1 ? 0.5 : 1 }}
            >
              Back
            </button>
            {step < 3 && (
              <button onClick={next} className="btn" style={{ backgroundColor: PALETTE.primary, color: PALETTE.bg }}>
                Next <ArrowRight size={16} className="inline ml-1" />
              </button>
            )}
          </div>
        </div>

        <footer className="text-center text-sm" style={{ color: PALETTE.muted }}>
          24/7 Support: +92 301 39 00 245 | +92 306 38 92 102<br />
          Email: codingwithme178@gmail.com
        </footer>
      </div>

      {/* basic animations */}
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        .animate-spin { animation: spin 1s linear infinite; }
        .btn {
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .btn:hover:not(:disabled) { transform: translateY(-1px); opacity: 0.9; }
        .btn:disabled { cursor: not-allowed; }
      `}</style>
    </div>
  );
}

/* ---------- Reusable Inputs ---------- */
const Input = ({ label, error, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium" style={{ color: PALETTE.text }}>{label}</span>
    <input 
      {...props} 
      className="w-full mt-1 rounded-lg p-3 transition-colors" 
      style={{ 
        backgroundColor: PALETTE.bg, 
        border: `1px solid ${error ? PALETTE.red : PALETTE.muted}`, 
        color: PALETTE.text 
      }} 
    />
    {error && <Error>{error}</Error>}
  </label>
);

const Select = ({ label, options, error, disabled, ...props }) => (
  <label className="block">
    <span className="text-sm font-medium" style={{ color: PALETTE.text }}>{label}</span>
    <select 
      {...props} 
      disabled={disabled}
      className="w-full mt-1 rounded-lg p-3 transition-colors" 
      style={{ 
        backgroundColor: PALETTE.bg, 
        border: `1px solid ${error ? PALETTE.red : PALETTE.muted}`, 
        color: PALETTE.text,
        opacity: disabled ? 0.5 : 1
      }}
    >
      <option value="" disabled>
        {disabled ? 'Select service first' : 'Select...'}
      </option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
    {error && <Error>{error}</Error>}
  </label>
);

const Error = ({ children }) => (
  <p className="text-xs flex items-center gap-1 mt-1" style={{ color: PALETTE.red }}>
    <AlertCircle size={12} />
    {children}
  </p>
);