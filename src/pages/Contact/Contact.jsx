import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PageHeader } from '../../components/common/PageHeader';
import { companyInfo } from '../../data/company';
import { products } from '../../data/products';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  Loader2,
  FileQuestion
} from 'lucide-react';

export const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || companyInfo.contact.enquirySubjects[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    cropType: '',
    subject: initialSubject,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const urlSubject = searchParams.get('subject');
    if (urlSubject) {
      setFormData((prev) => ({ ...prev, subject: urlSubject }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      newErrors.message = 'Please provide specific details regarding your crop or inquiry';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setRefId(`CORA-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      cropType: '',
      subject: companyInfo.contact.enquirySubjects[0],
      message: ''
    });
    setErrors({});
  };

  const faqs = [
    {
      q: 'How do I choose between EDTA and HEDP chelated micronutrients?',
      a: 'EDTA chelates (like Ortus Ca EDTA 10% and Ortus Zn) are ideal for standard to mildly acidic soil and water conditions (pH 4.0 - 7.5). In regions with high calcium carbonate, alkaline soil, or hard borewell water (pH up to 9.0), our HEDP chelates (Ortus Fe HEDP & Ortus Zn HEDP) provide superior stability and zero phosphate precipitation.'
    },
    {
      q: 'Are Euro-Ferti fertilizers suitable for automated drip fertigation?',
      a: 'Yes, 100% of the Euro-Ferti range is completely water-soluble with negligible insoluble residue, making them safe for micro-drippers, venturi injectors, and drip lateral pipes without risk of clogging.'
    },
    {
      q: 'How can I become an authorized regional distributor or dealer?',
      a: 'Select "Distributor & Dealership Opportunities" in the enquiry subject form above or email us at contact@corasunagro.com with your firm details, warehouse location, and operational territory. Our commercial team will connect within 24 business hours.'
    },
    {
      q: 'Where can I find Marathi dosage schedules for my crop?',
      a: 'Every product page in our catalogue features dedicated Marathi agronomic guidance under the specifications section. You can also contact our agronomists for customized crop stage calendars.'
    }
  ];

  return (
    <div className="contact-page">
      <PageHeader
        eyebrow="Contact & Agronomic Advisory"
        title="Connect with Our Technical Agronomy & Dealership Team"
        description="Whether you have questions on crop stage dosage, bulk agricultural supply, or commercial distribution, we are here to assist."
        breadcrumbs={[{ label: 'Contact' }]}
        variant="green"
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
              gap: 'clamp(var(--space-8), 5vw, var(--space-12))',
              alignItems: 'start',
              marginBottom: 'var(--space-16)'
            }}
          >
            {/* Left Column: Official Contact Channels & Advisory SLA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <Card variant="glass" style={{ padding: 'clamp(var(--space-6), 3vw, var(--space-8))' }}>
                <span className="eyebrow">Direct Channels</span>
                <h3 className="heading-3" style={{ marginBlock: 'var(--space-2)' }}>
                  Official Corporate Contact
                </h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
                  Reach out directly to our corporate headquarters or technical field advisors.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                  {/* Address */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={22} color="var(--color-primary-dark)" />
                    </div>
                    <div>
                      <h4 className="heading-6">Corporate Office</h4>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        {companyInfo.contact.registeredOffice}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-secondary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={22} color="var(--color-secondary-dark)" />
                    </div>
                    <div>
                      <h4 className="heading-6">Phone & Agronomic Advisory</h4>
                      <p style={{ fontSize: 'var(--font-size-sm)', marginTop: '2px' }}>
                        <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--color-primary-dark)', fontWeight: 700, textDecoration: 'none' }}>
                          {companyInfo.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={22} color="var(--color-primary-dark)" />
                    </div>
                    <div>
                      <h4 className="heading-6">Email Inquiries</h4>
                      <p style={{ fontSize: 'var(--font-size-sm)', marginTop: '2px' }}>
                        <a href={`mailto:${companyInfo.contact.email}`} style={{ color: 'var(--color-primary-dark)', fontWeight: 700, textDecoration: 'none' }}>
                          {companyInfo.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-bg-surface-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={22} color="var(--color-text-muted)" />
                    </div>
                    <div>
                      <h4 className="heading-6">Operational Hours</h4>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                        {companyInfo.contact.businessHours}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Assurance Box */}
                <div
                  style={{
                    marginTop: 'var(--space-8)',
                    padding: 'var(--space-4)',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: 'var(--color-primary-50)',
                    border: '1px solid var(--color-primary-200)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-3)'
                  }}
                >
                  <ShieldCheck size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-primary-dark)', fontWeight: 600 }}>
                    Our dedicated agronomic specialists review technical dosage queries within 24 business hours.
                  </p>
                </div>
              </Card>
            </div>

            {/* Right Column: Interactive Enquiry Form */}
            <div>
              <Card variant="default" style={{ padding: 'clamp(var(--space-6), 4vw, var(--space-8))' }}>
                {submitted ? (
                  /* Success Feedback Card */
                  <div style={{ textAlign: 'center', padding: 'clamp(var(--space-6), 4vw, var(--space-10))' }}>
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-primary-100)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'var(--space-4)'
                      }}
                    >
                      <CheckCircle2 size={44} color="var(--color-primary)" />
                    </div>

                    <h3 className="heading-3" style={{ marginBottom: 'var(--space-2)' }}>
                      Enquiry Successfully Received!
                    </h3>

                    <p className="lead" style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--space-4)' }}>
                      Thank you, <strong>{formData.name}</strong>. Your enquiry has been registered with reference ID:
                    </p>

                    <div
                      style={{
                        display: 'inline-block',
                        padding: '8px 20px',
                        backgroundColor: 'var(--color-bg-surface-subtle)',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-family-display)',
                        fontWeight: 800,
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--color-primary-dark)',
                        letterSpacing: '0.05em',
                        marginBottom: 'var(--space-6)',
                        border: '1px solid var(--color-border-medium)'
                      }}
                    >
                      {refId}
                    </div>

                    <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', maxWidth: '440px', marginInline: 'auto', marginBottom: 'var(--space-8)' }}>
                      A representative from our agronomy team will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> with detailed product schedules and pricing.
                    </p>

                    <Button onClick={resetForm} variant="outline" size="md">
                      Submit Another Enquiry
                    </Button>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <span className="eyebrow">Quick Enquiry</span>
                      <h3 className="heading-3" style={{ marginBlock: 'var(--space-1)' }}>
                        Product, Dealership & Field Inquiries
                      </h3>
                      <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
                        Please fill out the details below to receive expert agronomic dosage charts or commercial terms.
                      </p>
                    </div>

                    {/* Name */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        disabled={isLoading}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    {/* Email & Phone Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 'var(--space-4)' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. ramesh@example.com"
                          disabled={isLoading}
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone Number <span className="required">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          disabled={isLoading}
                        />
                        {errors.phone && <span className="form-error">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Crop & State Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 'var(--space-4)' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="state">
                          State / Region
                        </label>
                        <input
                          id="state"
                          name="state"
                          type="text"
                          className="form-input"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="e.g. Maharashtra / Gujarat"
                          disabled={isLoading}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="cropType">
                          Primary Crop (Optional)
                        </label>
                        <input
                          id="cropType"
                          name="cropType"
                          type="text"
                          className="form-input"
                          value={formData.cropType}
                          onChange={handleChange}
                          placeholder="e.g. Grapes, Sugarcane, Tomato"
                          disabled={isLoading}
                        />
                      </div>
                    </div>

                    {/* Subject / Purpose */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">
                        Enquiry Purpose / Formulation
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-select"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isLoading}
                      >
                        {companyInfo.contact.enquirySubjects.map((sub, idx) => (
                          <option key={idx} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Message / Crop Requirements <span className="required">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your crop area, growth stage, or commercial dealership inquiry..."
                        rows={4}
                        disabled={isLoading}
                      />
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={isLoading ? Loader2 : Send}
                      disabled={isLoading}
                      style={{ width: '100%' }}
                    >
                      {isLoading ? 'Processing Enquiry...' : 'Submit Enquiry'}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div style={{ maxWidth: '850px', marginInline: 'auto' }}>
            <div className="section-header" style={{ marginBottom: 'var(--space-8)' }}>
              <span className="eyebrow eyebrow-blue">Frequently Asked Questions</span>
              <h3 className="heading-3">Common Agronomic & Distribution Questions</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <Card
                    key={idx}
                    variant="default"
                    style={{
                      padding: 'var(--space-5) var(--space-6)',
                      cursor: 'pointer',
                      border: isOpen ? '1px solid var(--color-primary)' : '1px solid var(--color-border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
                      <h4 style={{ fontSize: 'var(--font-size-sm)', fontWeight: 700, color: 'var(--color-text-main)' }}>
                        {faq.q}
                      </h4>
                      <ChevronDown
                        size={18}
                        color="var(--color-text-muted)"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          flexShrink: 0
                        }}
                      />
                    </div>

                    {isOpen && (
                      <p
                        style={{
                          fontSize: 'var(--font-size-xs)',
                          color: 'var(--color-text-muted)',
                          lineHeight: 1.6,
                          marginTop: 'var(--space-3)',
                          paddingTop: 'var(--space-3)',
                          borderTop: '1px solid var(--color-border-subtle)'
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
