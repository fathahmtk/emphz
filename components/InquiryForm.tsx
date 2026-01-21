import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { UploadCloud, CheckCircle, FileUp } from 'lucide-react';

interface InquiryFormProps {
    productName?: string;
    className?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ productName, className = '' }) => {
    const [formState, setFormState] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: 'EPC/Infrastructure',
        location: '',
        quantity: '',
        message: productName ? `Inquiry regarding ${productName}` : ''
    });

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            alert(`File selected: ${e.target.files[0].name}`);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Your requirement has been received.\n\nOur engineering team will review the specifications and response with a formal proposal within 48 hours.");
        setFormState({
            name: '',
            company: '',
            email: '',
            phone: '',
            projectType: 'EPC/Infrastructure',
            location: '',
            quantity: '',
            message: productName ? `Inquiry regarding ${productName}` : ''
        });
    };

    const inputClasses = "w-full border-gray-300 bg-gray-50 rounded-sm shadow-sm focus:bg-white focus:border-accent-orange focus:ring-1 focus:ring-accent-orange text-sm py-3 px-4 transition-all placeholder:text-gray-400 font-sans text-navy-900";
    const labelClasses = "block text-[10px] font-bold text-gray-500 mb-1.5 uppercase tracking-widest font-display";

    return (
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Full Name <span className="text-accent-orange">*</span></label>
                    <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        required
                        className={inputClasses}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={labelClasses}>Organization <span className="text-accent-orange">*</span></label>
                    <input 
                        type="text" 
                        name="company"
                        value={formState.company}
                        required
                        className={inputClasses}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Work Email <span className="text-accent-orange">*</span></label>
                    <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        required
                        className={inputClasses}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={labelClasses}>Phone <span className="text-accent-orange">*</span></label>
                    <input 
                        type="tel" 
                        name="phone"
                        value={formState.phone}
                        required
                        className={inputClasses}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className={labelClasses}>Project Sector</label>
                <select 
                    name="projectType"
                    value={formState.projectType}
                    className={inputClasses}
                    onChange={handleChange}
                >
                    <option>EPC / Infrastructure</option>
                    <option>Government / PSU Procurement</option>
                    <option>Industrial Plant / Private Utility</option>
                    <option>Architectural / Consulting</option>
                    <option>Telecom / Data Center</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className={labelClasses}>Location</label>
                    <input 
                        type="text" 
                        name="location"
                        value={formState.location}
                        className={inputClasses}
                        placeholder="City, State"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className={labelClasses}>Volume</label>
                    <input 
                        type="text" 
                        name="quantity"
                        value={formState.quantity}
                        className={inputClasses}
                        placeholder="Qty / Area"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label className={labelClasses}>Technical Requirements <span className="text-accent-orange">*</span></label>
                <textarea 
                    name="message"
                    value={formState.message}
                    rows={4}
                    required
                    className={inputClasses}
                    placeholder="Describe specifications, timeline, and delivery requirements..."
                    onChange={handleChange}
                ></textarea>
            </div>

            <div 
                className="border-2 border-dashed border-gray-300 rounded-sm p-6 text-center hover:bg-gray-50 hover:border-accent-orange transition-all cursor-pointer group"
                onClick={handleFileClick}
            >
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-white group-hover:text-accent-orange transition-colors">
                     <FileUp className="h-5 w-5 text-gray-500 group-hover:text-accent-orange" />
                </div>
                <span className="block text-sm font-bold text-gray-700 group-hover:text-navy-900">
                    Attach BOQ / Drawings
                </span>
                <span className="block text-xs text-gray-400 mt-1">
                    PDF, DWG, XLSX (Max 10MB)
                </span>
                 <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileChange}
                 />
            </div>

            <div className="pt-2">
                <Button type="submit" variant="secondary" fullWidth className="h-12 text-sm uppercase tracking-widest">Submit Proposal Request</Button>
                <div className="mt-4 flex items-center justify-center text-[10px] text-gray-400 uppercase tracking-wide">
                    <CheckCircle className="h-3 w-3 mr-1.5 text-accent-orange" />
                    <span>Secure Encrypted Transmission</span>
                </div>
            </div>
        </form>
    );
};