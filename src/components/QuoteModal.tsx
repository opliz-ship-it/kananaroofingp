import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useQuote } from '../context/QuoteContext';
import { content } from '../data/content';
import { X, MessageCircle, Mail, CheckCircle2, Building, User, Layers, Ruler, FileText } from 'lucide-react';

const QuoteModal: React.FC = () => {
    const { language } = useLanguage();
    const { isOpen, closeQuoteModal, prefill } = useQuote();
    const t = content[language].quote;
    const info = content[language].contact.info;

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        whatsapp: '',
        projectType: t.projectTypes[0],
        governorate: t.governorates[0],
        product: prefill.product || t.products[0],
        quantity: '',
        dimensions: '',
        thickness: prefill.thickness || t.thicknesses[1],
        color: prefill.color || t.colors[0],
        notes: ''
    });

    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (prefill.product) {
            setFormData(prev => ({
                ...prev,
                product: prefill.product || prev.product,
                thickness: prefill.thickness || prev.thickness,
                color: prefill.color || prev.color,
            }));
        }
    }, [prefill]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeQuoteModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeQuoteModal]);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const formatMessageText = () => {
        return (
            `*طلب عرض سعر رسمي - كنانة رووف (Kanana Roof)*\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `👤 *الاسم:* ${formData.name || '-'}\n` +
            `🏢 *الشركة/المنشأة:* ${formData.company || '-'}\n` +
            `📞 *الهاتف:* ${formData.phone || '-'}\n` +
            `💬 *الواتساب:* ${formData.whatsapp || formData.phone || '-'}\n` +
            `📍 *المحافظة:* ${formData.governorate}\n` +
            `🏗️ *نوع المشروع:* ${formData.projectType}\n` +
            `📦 *المنتج المطلوب:* ${formData.product}\n` +
            `📏 *الكمية:* ${formData.quantity || '-'}\n` +
            `📐 *المقاسات والأبعاد:* ${formData.dimensions || '-'}\n` +
            `🛡️ *السُمك:* ${formData.thickness}\n` +
            `🎨 *اللون:* ${formData.color}\n` +
            `📝 *ملاحظات/المخطط:* ${formData.notes || 'لا توجد ملاحظات إضافية'}\n` +
            `━━━━━━━━━━━━━━━━━━━━\n` +
            `مرسل من موقع كنانة رووف الرسمي`
        );
    };

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = encodeURIComponent(formatMessageText());
        const phone = "201222522624";
        const url = `https://wa.me/${phone}?text=${text}`;
        window.open(url, '_blank');
        setSubmitted(true);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`طلب عرض سعر جديد - ${formData.company || formData.name}`);
        const body = encodeURIComponent(formatMessageText());
        const mailtoUrl = `mailto:${info.email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div
                className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 max-h-[92vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-terracotta-600 to-terracotta-500 text-white p-5 sm:p-6 relative shrink-0">
                    <button
                        onClick={closeQuoteModal}
                        className="absolute top-4 ltr:right-4 rtl:left-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        aria-label={t.close}
                    >
                        <X size={24} />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 sm:p-3 bg-white/10 rounded-xl shrink-0">
                            <Layers size={26} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold">{t.modalTitle}</h2>
                            <p className="text-xs sm:text-sm text-white/90 mt-0.5">{t.modalSubtitle}</p>
                        </div>
                    </div>
                </div>

                {submitted ? (
                    <div className="p-8 text-center space-y-4 overflow-y-auto">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 size={40} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{t.successTitle}</h3>
                        <p className="text-gray-600 max-w-md mx-auto">{t.successDesc}</p>
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    closeQuoteModal();
                                }}
                                className="px-6 py-2.5 bg-terracotta-600 hover:bg-terracotta-700 text-white font-medium rounded-lg transition-colors"
                            >
                                {t.close}
                            </button>
                        </div>
                    </div>
                ) : (
                    <form className="p-5 sm:p-8 space-y-6 overflow-y-auto">
                        {/* Section 1: Client & Enterprise Info */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-600 flex items-center gap-2">
                                <User size={16} />
                                {language === 'ar' ? '1. بيانات العميل والشركة' : '1. Client & Company Details'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.name} *</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder={t.namePlaceholder}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.company}</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder={t.companyPlaceholder}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.phone} *</label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            dir="ltr"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder={t.phonePlaceholder}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none text-left"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.whatsapp}</label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            dir="ltr"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            placeholder={t.whatsappPlaceholder}
                                            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none text-left"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Location & Project Type */}
                        <div className="space-y-4 pt-2 border-t border-gray-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-600 flex items-center gap-2">
                                <Building size={16} />
                                {language === 'ar' ? '2. موقع وطبيعة المشروع' : '2. Project Location & Type'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.projectType}</label>
                                    <select
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                    >
                                        {t.projectTypes.map((pt, i) => (
                                            <option key={i} value={pt}>{pt}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.governorate}</label>
                                    <select
                                        name="governorate"
                                        value={formData.governorate}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                    >
                                        {t.governorates.map((gov, i) => (
                                            <option key={i} value={gov}>{gov}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Technical Specifications */}
                        <div className="space-y-4 pt-2 border-t border-gray-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-600 flex items-center gap-2">
                                <Ruler size={16} />
                                {language === 'ar' ? '3. مواصفات الألواح والكميات المطلوبة' : '3. Sheets Specs & Quantity'}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.product}</label>
                                    <select
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                    >
                                        {t.products.map((p, i) => (
                                            <option key={i} value={p}>{p}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.quantity} *</label>
                                    <input
                                        type="text"
                                        name="quantity"
                                        required
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder={t.quantityPlaceholder}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.dimensions}</label>
                                    <input
                                        type="text"
                                        name="dimensions"
                                        value={formData.dimensions}
                                        onChange={handleChange}
                                        placeholder={t.dimensionsPlaceholder}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.thickness}</label>
                                    <select
                                        name="thickness"
                                        value={formData.thickness}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                    >
                                        {t.thicknesses.map((th, i) => (
                                            <option key={i} value={th}>{th}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">{t.color}</label>
                                    <select
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none bg-white"
                                    >
                                        {t.colors.map((c, i) => (
                                            <option key={i} value={c}>{c}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Blueprint & Notes */}
                        <div className="space-y-4 pt-2 border-t border-gray-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-terracotta-600 flex items-center gap-2">
                                <FileText size={16} />
                                {language === 'ar' ? '4. ملاحظات أو مواصفات خاصة بالمخطط' : '4. Notes & Blueprint Details'}
                            </h4>
                            <div>
                                <textarea
                                    name="notes"
                                    rows={3}
                                    value={formData.notes}
                                    onChange={handleChange}
                                    placeholder={t.notesPlaceholder}
                                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-200 outline-none"
                                />
                            </div>
                        </div>

                        {/* Submission Buttons */}
                        <div className="pt-4 flex flex-col sm:flex-row gap-3">
                            <button
                                type="button"
                                onClick={handleWhatsAppSubmit}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:scale-[1.01]"
                            >
                                <MessageCircle size={20} />
                                <span>{t.submitWhatsApp}</span>
                            </button>

                            <button
                                type="button"
                                onClick={handleEmailSubmit}
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-terracotta-600 hover:bg-terracotta-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-terracotta-600/20 hover:scale-[1.01]"
                            >
                                <Mail size={20} />
                                <span>{t.submitEmail}</span>
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default QuoteModal;
