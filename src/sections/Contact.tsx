import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Upload,
  FileText,
  X,
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Linkedin,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

const contactConfig = {
  subtitle:     "Get In Touch",
  titleRegular: "Contact",
  titleItalic:  "Us",
  description:
    "Nugentrix is led by a technology veteran with 15 years of experience in Java, UI development, and DevOps. Whether you're looking for software development services or seeking new career opportunities, we'd love to hear from you.",
  email:   "info@nugentrix.com",
  phone:   "(226) 507-3171",
  address: "30 Eglinton Ave W, Suite 400\nMississauga, Ontario L5R 3E7",
};

const INQUIRY_LABELS: Record<string, string> = {
  "job-seeker": "Job Seeker – Upload Resume",
  "client":     "Client – Project Inquiry",
  "staffing":   "Staffing Request",
  "general":    "General Inquiry",
};

export function Contact() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    name:        "",
    email:       "",
    inquiryType: "",
    message:     "",
  });
  const [files, setFiles]               = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg]         = useState("");

  // ── Input handlers ──────────────────────────────────────────────────────────
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const valid = Array.from(e.target.files).filter(f => {
      const okType = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(f.type);
      return okType && f.size <= 5 * 1024 * 1024;
    });
    setFiles(prev => [...prev, ...valid]);
  };

  const removeFile = (i: number) => setFiles(prev => prev.filter((_, idx) => idx !== i));

  // ── Submit → POST /api/contact ──────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMsg("");

    try {
      // Use FormData so files (attachments) are included in the request
      const body = new FormData();
      body.append("name",        formData.name);
      body.append("email",       formData.email);
      body.append("inquiryType", INQUIRY_LABELS[formData.inquiryType] ?? formData.inquiryType);
      body.append("message",     formData.message);
      // Append each file under the key "attachments" — matches upload.array('attachments', 5)
      files.forEach(file => body.append("attachments", file));

      const res = await fetch("/api/contact", {
        method: "POST",
        // Do NOT set Content-Type header — browser sets it automatically with the correct boundary
        body,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Server error. Please try again.");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
      setFiles([]);
      // Reset after 6 s so they can send another message
      setTimeout(() => setSubmitStatus("idle"), 6000);

    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMsg(msg);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section id="contact" className="section-padding relative bg-slate-900 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-modern relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-300 text-sm font-semibold mb-6">
            {contactConfig.subtitle}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {contactConfig.titleRegular}{" "}
            <span className="gradient-text">{contactConfig.titleItalic}</span>
          </h2>
          <p className="text-lg text-slate-300">{contactConfig.description}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

          {/* ── Left sidebar ────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a href={`mailto:${contactConfig.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Phone</p>
                  <a href={`tel:${contactConfig.phone.replace(/\D/g, "")}`} className="text-white hover:text-teal-400 transition-colors">
                    {contactConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Address</p>
                  <p className="text-white whitespace-pre-line">{contactConfig.address}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-sm text-slate-400 mb-4">Connect With Us</p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/company/nugentrix" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href={`mailto:${contactConfig.email}`}
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a href="#"
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-400 flex items-center justify-center transition-colors">
                  <MessageSquare className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Info blurbs */}
            <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2">For Job Seekers</h4>
              <p className="text-slate-300 text-sm mb-4">
                Upload your resume. We specialize in Java, React, Python, Kubernetes, Docker, and DevOps roles.
              </p>
              <h4 className="text-lg font-semibold text-white mb-2">For Clients</h4>
              <p className="text-slate-300 text-sm">
                Share your project requirements. 15 years of expertise ensures quality delivery.
              </p>
            </div>
          </div>

          {/* ── Form ──────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">

              {/* Success state */}
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-5">
                  <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 max-w-sm">
                      Your message has been delivered to{" "}
                      <strong>info@nugentrix.com</strong>. We'll get back to you within 24 hours.
                    </p>
                    <p className="text-slate-400 text-sm mt-2">
                      A confirmation email has been sent to your inbox too.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Error banner */}
                  {submitStatus === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMsg}</p>
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                      <Input
                        id="name" name="name" type="text" required
                        value={formData.name} onChange={handleChange}
                        placeholder="John Doe"
                        minLength={2}
                        maxLength={100}
                        className="mt-2 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                      <p className="mt-1 text-xs text-slate-400 text-right">{formData.name.length}/100</p>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                      <Input
                        id="email" name="email" type="email" required
                        value={formData.email} onChange={handleChange}
                        placeholder="john@example.com"
                        maxLength={254}
                        className="mt-2 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                      <p className="mt-1 text-xs text-slate-400 text-right">{formData.email.length}/254</p>
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div>
                    <Label className="text-slate-700 font-medium">Inquiry Type *</Label>
                    <Select
                      required
                      value={formData.inquiryType}
                      onValueChange={v => setFormData(prev => ({ ...prev, inquiryType: v }))}
                    >
                      <SelectTrigger className="mt-2 bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-500 rounded-xl">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job-seeker">Job Seeker – Upload Resume</SelectItem>
                        <SelectItem value="client">Client – Project Inquiry</SelectItem>
                        <SelectItem value="staffing">Staffing Request</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                    <Textarea
                      id="message" name="message" required
                      value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your project, skills, or requirements..."
                      rows={5}
                      maxLength={1500}
                      className="mt-2 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl resize-none"
                    />
                    <p className={`mt-1 text-xs text-right ${formData.message.length >= 1400 ? 'text-orange-500 font-medium' : 'text-slate-400'}`}>
                      {formData.message.length}/1500
                      {formData.message.length >= 1400 && ' — approaching limit'}
                    </p>
                  </div>

                  {/* File upload */}
                  <div>
                    <Label className="text-slate-700 font-medium mb-2 block">
                      Attach Files — PDF or DOC (optional)
                    </Label>
                    <input
                      type="file" ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx" multiple className="hidden"
                    />
                    <Button
                      type="button" variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full border-dashed border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 text-slate-600 py-6 rounded-xl"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Resume or Documents
                    </Button>
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((f, i) => (
                          <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl p-3 border border-slate-200">
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-blue-500" />
                              <span className="text-sm text-slate-700 truncate max-w-[200px]">{f.name}</span>
                              <span className="text-xs text-slate-400">({(f.size / 1024 / 1024).toFixed(2)} MB)</span>
                            </div>
                            <button type="button" onClick={() => removeFile(i)} className="text-slate-400 hover:text-red-500 transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-xs text-slate-400">Maximum 5 MB · PDF, DOC, DOCX</p>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.inquiryType}
                    className="w-full btn-primary py-6 text-lg rounded-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-center text-slate-400">
                    Your message will be delivered to <strong>info@nugentrix.com</strong>
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
