/**
 * External dependencies
 */
import React from 'react';

// Types
interface SectionProps {
    wrapperClass: string;
    hint?: string;
    value?: string;
}

const Section: React.FC< SectionProps > = ( { wrapperClass, hint, value } ) => {
    return (
        <>
            <div className={ wrapperClass }>
                { value && <span>{ value }</span> }
                { hint && (
                    <p
                        className="title"
                        dangerouslySetInnerHTML={ { __html: hint } }
                    ></p>
                ) }
                <div className="desc">Lorem ipsum dolor sit amet.</div>
            </div>
        </>
    );
};

export default Section;
