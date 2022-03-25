import React, { TextareaHTMLAttributes, useState } from 'react';
import styles from './index.module.css';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    value: string;
    maxLength?: number;
    disabled?: boolean;
    onChange?(value: string): void;
    onSubmit?(value: string): void;
};

function InputForm({ value, placeholder, maxLength, disabled = false, readOnly = false, onChange, onSubmit }: Props) {
    const [formValue, setFormValue] = useState<string>(value || '');
    const isDirty = value !== formValue;
    const count = maxLength && maxLength - formValue.length;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue(e.currentTarget.value);
        onChange?.(e.currentTarget.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(formValue);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                <textarea
                    className={styles.textArea}
                    value={formValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    disabled={disabled}
                    readOnly={readOnly}
                    maxLength={maxLength}
                ></textarea>
                {maxLength && <span className={styles.counter}>{count}</span>}
            </label>

            {isDirty && (
                <button className={styles.button} type='submit'>
                    Save
                </button>
            )}
        </form>
    );
}

export default InputForm;
