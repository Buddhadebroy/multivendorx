import {
    ChangeEvent,
    MouseEvent,
    FocusEvent,
    useState,
    forwardRef,
} from 'react';
import DisplayButton from './DisplayButton';

interface BasicInputProps {
    wrapperClass?: string;
    inputLabel?: string;
    inputClass?: string;
    id?: string;
    type?:
    | 'text'
    | 'button'
    | 'number'
    | 'color'
    | 'password'
    | 'email'
    | 'file'
    | 'range'
    | 'time'
    | 'url';
    name?: string;
    value?: string | number;
    placeholder?: string;
    min?: number;
    max?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOver?: (e: MouseEvent<HTMLInputElement>) => void;
    onMouseOut?: (e: MouseEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    postInsideText?: string;
    generate?: string;
    clickBtnName?: string;
    msg?: any;
    onclickCallback?: ( e: React.MouseEvent< HTMLButtonElement > ) => void;
    proSetting?: boolean;
    description?: string;
    descClass?: string;
    rangeUnit?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: string;
    preText?: string;
    postText?: string;
    preInsideText?: string;
    required?: boolean;
}

const BasicInput = forwardRef<HTMLInputElement, BasicInputProps>(
    (
        {
            wrapperClass,
            inputLabel,
            inputClass,
            id,
            type = 'text',
            name = 'basic-input',
            value,
            placeholder,
            min,
            max,
            onChange,
            onClick,
            onMouseOver,
            onMouseOut,
            onFocus,
            onBlur,
            postInsideText,
            size,
            preText,
            postText,
            generate,
            clickBtnName,
            onclickCallback,
            msg,
            proSetting,
            description,
            descClass,
            rangeUnit,
            disabled = false,
            readOnly = false,
            preInsideText,
            required = false
        },
        ref
    ) => {
        const [copied, setCopied] = useState(false);

        const generateRandomKey = (length = 8): string => {
            const characters =
                'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            return Array.from({ length })
                .map(() =>
                    characters.charAt(
                        Math.floor(Math.random() * characters.length)
                    )
                )
                .join('');
        };

        const generateSSOKey = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            const key = generateRandomKey(8);
            if (onChange) {
                const event = {
                    target: { value: key },
                } as unknown as ChangeEvent<HTMLInputElement>;
                onChange(event);
            }
        };

        const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (value) {
                navigator.clipboard.writeText(String(value)).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 10000);
                });
            }
        };

        const handleClear = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (onChange) {
                const event = {
                    target: { value: '' },
                } as unknown as ChangeEvent<HTMLInputElement>;
                onChange(event);
            }
        };
        return (
            <>
                <div
                    className={`${wrapperClass || ''} ${generate ? 'generate' : ''} ${preInsideText || postInsideText ? 'inner-input' : ''}`}
                >
                    {inputLabel && (
                        <label htmlFor={id}>{inputLabel}</label>
                    )}

                    {type === 'button' ? (
                        <DisplayButton
                            wraperClass={inputClass || 'admin-btn default-btn'}
                            onClick={(e) => onClick && onClick(e as any)}
                        >
                            <span className="text">{name}</span>
                        </DisplayButton>
                    ) : (
                        <>
                            {preText && (
                                <span
                                    className="before"
                                    dangerouslySetInnerHTML={{ __html: preText }}
                                />
                            )}
                            <div className="input-wrapper" style={{ width: size || '100%' }}>
                                {preInsideText && (
                                    <span
                                        className="pre"
                                        dangerouslySetInnerHTML={{ __html: preInsideText }}
                                    />
                                )}
                                <input
                                    ref={ref}
                                    className={['basic-input', inputClass].join(' ')}
                                    id={id}
                                    type={type}
                                    name={name}
                                    placeholder={placeholder}
                                    value={value ?? ''}
                                    min={['number', 'range'].includes(type) ? min : undefined}
                                    max={['number', 'range'].includes(type) ? max : undefined}
                                    onChange={onChange}
                                    onClick={onClick}
                                    onMouseOver={onMouseOver}
                                    onMouseOut={onMouseOut}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    readOnly={readOnly}
                                    required={required}
                                />
                                {postInsideText && (
                                    <span
                                        className="parameter"
                                        dangerouslySetInnerHTML={{ __html: postInsideText }}
                                    />
                                )}
                                {clickBtnName && (
                                    <DisplayButton
                                        wraperClass="admin-btn btn-purple"
                                        onClick={onclickCallback}
                                    >
                                        <>
                                            <span className="text">{clickBtnName}</span>
                                        </>
                                    </DisplayButton>
                                )}
                                {generate &&
                                    ((!value || value === '') ? (
                                        <DisplayButton
                                            wraperClass="admin-btn btn-purple"
                                            onClick={generateSSOKey}
                                        >
                                            <>
                                                <i className="adminlib-star-icon"></i>
                                                <span className="text">Generate</span>
                                            </>
                                        </DisplayButton>
                                    ) : (
                                        <>
                                            <DisplayButton
                                                wraperClass="clear-btn"
                                                onClick={handleClear}
                                            >
                                                <i className="adminlib-delete"></i>
                                            </DisplayButton>

                                            <DisplayButton
                                                wraperClass="copy-btn"
                                                onClick={handleCopy}
                                            >
                                                <>
                                                    <i className="adminlib-vendor-form-copy"></i>
                                                    <span
                                                        className={
                                                            !copied
                                                                ? 'tooltip'
                                                                : 'tooltip tool-clip'
                                                        }
                                                    >
                                                        {copied ? (
                                                            <>
                                                                <i className="adminlib-success-notification"></i>
                                                                Copied
                                                            </>
                                                        ) : (
                                                            'Copy to clipboard'
                                                        )}
                                                    </span>
                                                </>
                                            </DisplayButton>
                                        </>
                                    ))}
                            </div>
                            {postText && (
                                <span
                                    className="after"
                                    dangerouslySetInnerHTML={{ __html: postText }}
                                />
                            )}
                        </>
                    )}
                    {type === 'range' && (
                        <output className={descClass}>
                            {value ?? 0}
                            {rangeUnit}
                        </output>
                    )}
                </div>

                {description && (
                    <p
                        className={descClass}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}

                {proSetting && <span className="admin-pro-tag"><i className="adminlib-pro-tag"></i>Pro</span>}
                {msg && <div className={msg.type}>{msg.message}</div>}
            </>
        );
    }
);

export default BasicInput;
