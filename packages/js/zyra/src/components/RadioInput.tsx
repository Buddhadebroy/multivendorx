/**
 * External dependencies
 */
import React, { ChangeEvent, useState, useEffect } from 'react';

// Types
interface RadioOption {
    key?: string;
    keyName?: string;
    value?: string | number;
    label?: string;
    name?: string;
    color?: string[] | string; // Can be an array of colors or an image URL
}

interface RadioInputProps {
    name?: string;
    wrapperClass?: string;
    inputWrapperClass?: string;
    activeClass?: string;
    inputClass?: string;
    idPrefix?: string;
    type?: 'radio-select' | 'radio-color' | 'default';
    options: RadioOption[];
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    radiSelectLabelClass?: string;
    labelImgClass?: string;
    labelOverlayClass?: string;
    labelOverlayText?: string;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    keyName?: string;
    showPreview?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = (props) => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    // Update preview colors whenever the selected value changes
    useEffect(() => {
        if (props.type === 'radio-color') {
            const selectedOption = props.options.find(
                (opt) => opt.value === props.value
            );
            if (selectedOption && Array.isArray(selectedOption.color)) {
                setSelectedColors(selectedOption.color);
            } else {
                setSelectedColors([]);
            }
        }
    }, [props.value, props.options, props.type]);

    return (
        <>
            <div
                className={props.wrapperClass}
            >
                {props.options.map((option) => {
                    const checked = props.value === option.value;
                    return (
                        <div
                            key={option.key}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <input
                                className={props.inputClass}
                                id={`${props.idPrefix}-${option.key}`}
                                type="radio"
                                name={option.name}
                                checked={checked}
                                value={option.value}
                                onChange={(e) => props.onChange?.(e)}
                                style={{ display: 'none' }}
                            />

                            <label
                                htmlFor={`${props.idPrefix}-${option.key}`}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    border: checked
                                        ? '2px solid #007cba'
                                        : '1px solid #ccc',
                                    borderRadius: '6px',
                                    padding: '10px 12px',
                                    cursor: 'pointer',
                                    backgroundColor: checked
                                        ? '#f0faff'
                                        : '#fff',
                                    transition: 'all 0.2s ease',
                                    width: '220px',
                                    boxShadow: checked
                                        ? '0 2px 5px rgba(0, 124, 186, 0.2)'
                                        : '0 1px 3px rgba(0,0,0,0.05)',
                                }}
                            >
                                {/* Option Label */}
                                <span
                                    style={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                    }}
                                >
                                    {option.label}
                                </span>

                                {/* Color Preview Bar */}
                                {props.type === 'radio-color' &&
                                    Array.isArray(option.color) && (
                                        <div
                                            style={{
                                                display: 'flex',
                                                overflow: 'hidden',
                                                borderRadius: '4px',
                                                width: '70px',
                                                height: '18px',
                                                border: '1px solid #ddd',
                                            }}
                                        >
                                            {option.color.map(
                                                (color, index) => (
                                                    <div
                                                        key={index}
                                                        style={{
                                                            flex: 1,
                                                            backgroundColor:
                                                                color,
                                                        }}
                                                    ></div>
                                                )
                                            )}
                                        </div>
                                    )}
                            </label>
                            {props.proSetting && (
                                <span className="admin-pro-tag">pro</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {props.type === 'radio-color' && props.showPreview && selectedColors.length > 0 && (
                <div
                    style={{
                        marginTop: '25px',
                        display: 'flex',
                        gap: '25px',
                        alignItems: 'flex-start',
                    }}
                >
                    <div
                        style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            background: '#fff',
                            width: '480px',
                            height: '300px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            transform: 'scale(1.02)',
                            transition: 'transform 0.2s ease',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                backgroundColor:
                                    selectedColors[2] || '#ccc',
                                height: '50px',
                                width: '100%',
                            }}
                        ></div>

                        <div style={{ display: 'flex', flex: 1 }}>
                            {/* Sidebar */}
                            <div
                                style={{
                                    backgroundColor:
                                        selectedColors[0] || '#eee',
                                    width: '90px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    paddingTop: '14px',
                                    gap: '14px',
                                }}
                            >
                                <div
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        backgroundColor:
                                            selectedColors[3] || '#999',
                                        borderRadius: '6px',
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        backgroundColor: '#fff',
                                        borderRadius: '6px',
                                        opacity: 0.6,
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        backgroundColor: '#fff',
                                        borderRadius: '6px',
                                        opacity: 0.6,
                                    }}
                                ></div>
                            </div>

                            {/* Content Area */}
                            <div
                                style={{
                                    flex: 1,
                                    backgroundColor:
                                        selectedColors[1] || '#f9f9f9',
                                    padding: '18px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '18px',
                                }}
                            >
                                {/* Mock Title */}
                                <div
                                    style={{
                                        width: '85%',
                                        height: '24px',
                                        backgroundColor:
                                            selectedColors[3] || '#ddd',
                                        borderRadius: '4px',
                                    }}
                                ></div>

                                {/* Mock Card */}
                                <div
                                    style={{
                                        backgroundColor: '#fff',
                                        border: `1px solid ${
                                            selectedColors[3] || '#ccc'
                                        }`,
                                        borderRadius: '8px',
                                        height: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: selectedColors[3] || '#000',
                                        fontSize: '15px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Card Preview
                                </div>

                                {/* Mock Button */}
                                <div
                                    style={{
                                        width: '110px',
                                        height: '36px',
                                        backgroundColor:
                                            selectedColors[3] || '#ccc',
                                        borderRadius: '5px',
                                        textAlign: 'center',
                                        lineHeight: '36px',
                                        color: '#fff',
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        cursor: 'pointer',
                                    }}
                                >
                                    Button
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {props.description && (
                <p
                    className={props.descClass}
                    dangerouslySetInnerHTML={{
                        __html: props.description,
                    }}
                ></p>
            )}
        </>
    );
};

export default RadioInput;
