'use client'
import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import DateInput from '@/components/shared/DateInput'

const ServiceRequestForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        machine: '',
        priority: 'medium',
        date: '',
        contact: '',
        location: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="mb-4">Service Request Form</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        {/* Request Title */}
                        <div className="col-12">
                            <label className="form-label">Request Title <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter request title"
                                required
                            />
                        </div>

                        {/* Select Machine */}
                        <div className="col-md-6">
                            <label className="form-label">Select Machine <span className="text-danger">*</span></label>
                            <select
                                className="form-select"
                                name="machine"
                                value={formData.machine}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Choose machine...</option>
                                <option value="cat-320">CAT 320 Excavator - FL001</option>
                                <option value="cat-966">CAT 966 Wheel Loader - FL002</option>
                                <option value="cat-d6">CAT D6 Bulldozer - FL003</option>
                                <option value="cat-730">CAT 730 Articulated Truck - FL004</option>
                                <option value="cat-140">CAT 140 Motor Grader - FL005</option>
                            </select>
                        </div>

                        {/* Priority Level */}
                        <div className="col-md-6">
                            <label className="form-label">Priority Level <span className="text-danger">*</span></label>
                            <select
                                className="form-select"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                                required
                            >
                                <option value="low">Low - Routine service</option>
                                <option value="medium">Medium - Scheduled service</option>
                                <option value="high">High - Urgent repair</option>
                                <option value="critical">Critical - Emergency</option>
                            </select>
                        </div>

                        {/* Preferred Date */}
                        <div className="col-md-6">
                            <label className="form-label">Preferred Date <span className="text-danger">*</span></label>
                            <DateInput
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                placeholder="Select date"
                                required
                            />
                        </div>

                        {/* Contact Number */}
                        <div className="col-md-6">
                            <label className="form-label">Contact Number <span className="text-danger">*</span></label>
                            <input
                                type="tel"
                                className="form-control"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="+27 XX XXX XXXX"
                                required
                            />
                        </div>

                        {/* Current Location */}
                        <div className="col-12">
                            <label className="form-label">Current Location <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="Enter machine location or site address"
                                required
                            />
                        </div>

                        {/* Detailed Description */}
                        <div className="col-12">
                            <label className="form-label">Detailed Description <span className="text-danger">*</span></label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Describe the issue or service requirement in detail..."
                                required
                            ></textarea>
                        </div>

                        {/* Attachments */}
                        <div className="col-12">
                            <label className="form-label">Attachments</label>
                            <div className="border border-dashed rounded p-4 text-center">
                                <FiUpload className="text-muted mb-2" size={32} />
                                <p className="text-muted mb-2">Drag and drop files here, or click to browse</p>
                                <p className="text-muted fs-12 mb-0">Supported formats: PDF, JPG, PNG, DOC (Max 10MB)</p>
                                <input type="file" className="d-none" multiple />
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="col-12">
                            <div className="d-flex gap-2 justify-content-end">
                                <button type="button" className="btn btn-light">
                                    Save as Draft
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Submit Request
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceRequestForm