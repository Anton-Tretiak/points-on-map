/* eslint-disable no-console */
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormType {
  name: string;
  description: string;
  latitude: string;
  longitude: string;
  photo: string;
}

interface Errors {
  name: string;
  latitude: string;
  longitude: string;
  photo: string;
}

export const AddFrom: React.FC = () => {
  const [formData, setFormData] = useState<FormType>({
    name: '',
    description: '',
    latitude: '',
    longitude: '',
    photo: '',
  });

  const [errors, setErrors] = useState<Errors>({
    name: '',
    latitude: '',
    longitude: '',
    photo: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors: Errors = {
      name: '',
      latitude: '',
      longitude: '',
      photo: '',
    };

    // Validate name field
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Validate latitude field
    if (formData.latitude.trim() === '') {
      newErrors.latitude = 'Latitude is required';
      isValid = false;
    }

    // Validate longitude field
    if (formData.longitude.trim() === '') {
      newErrors.longitude = 'Longitude is required';
      isValid = false;
    }

    // Validate photo field
    if (formData.photo.length > 200) {
      newErrors.photo = `Maximum length is 200. Yours is: ${formData.photo.length}`;
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            name: '',
            description: '',
            latitude: '',
            longitude: '',
            photo: '',
          });
        } else {
          console.error('Error submitting form');
        }
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement
    | HTMLTextAreaElement>) => {
    // eslint-disable-next-line no-shadow
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className={`input ${errors.name ? 'is-danger' : ''}`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        {errors.name && <p className="help is-danger">{errors.name}</p>}
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea
            className={`textarea`}
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            maxLength={400}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Latitude</label>
        <div className="control">
          <input
            className={`input ${errors.latitude ? 'is-danger' : ''}`}
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleInputChange}
          />
        </div>
        {errors.latitude && <p className="help is-danger">{errors.latitude}</p>}
      </div>

      <div className="field">
        <label className="label">Longitude</label>
        <div className="control">
          <input
            className={`input ${errors.longitude ? 'is-danger' : ''}`}
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleInputChange}
          />
        </div>
        {errors.longitude && (
          <p className="help is-danger">{errors.longitude}</p>
        )}
      </div>

      <div className="field">
        <label className="label">Photo</label>
        <div className="control">
          <input
            className={`input ${errors.photo ? 'is-danger' : ''}`}
            type="text"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
          />
        </div>
        {errors.photo && <p className="help is-danger">{errors.photo}</p>}
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-primary">Submit</button>
        </div>
      </div>
    </form>
  );
};
