import React, { useState, useEffect } from 'react';
import '../styles/web/NestedComponent.scss';

interface NestedField {
    key: string;
    type: 'number' | 'select';
    label: string;
    placeholder?: string;
    options?: { value: string; label: string }[];
}

interface NestedComponentProps {
    id: string;
    label?: string;
    fields: NestedField[];
    value: Record< string, any >[];
    addButtonLabel?: string;
    deleteButtonLabel?: string;
    onChange: ( value: Record< string, any >[] ) => void;
}

const NestedComponent: React.FC< NestedComponentProps > = ( {
    id,
    label,
    fields,
    value = [],
    onChange,
    addButtonLabel = 'Add',
    deleteButtonLabel = 'Delete',
} ) => {
    const [ rows, setRows ] = useState< Record< string, any >[] >( [] );

    useEffect( () => {
        setRows( value.length ? value : [ {} ] );
    }, [ value ] );

    const handleFieldChange = ( index: number, key: string, val: any ) => {
        const updated = [ ...rows ];
        updated[ index ] = { ...updated[ index ], [ key ]: val };
        setRows( updated );
        onChange( updated );
    };

    const addRow = () => {
        const updated = [ ...rows, {} ];
        setRows( updated );
        onChange( updated );
    };

    const removeRow = ( index: number ) => {
        const updated = rows.filter( ( _, i ) => i !== index );
        setRows( updated );
        onChange( updated );
    };

    return (
        <div className="nested-wrapper">
            { rows.map( ( row, rowIndex ) => (
                <div
                    className="nested-row"
                >
                    { fields.map( ( nestedField ) => {
                        const inputValue = row[ nestedField.key ] ?? '';
                        return (
                            <div
                                key={ nestedField.key }
                                className="form-wrapper"
                            >
                                <label>
                                    { nestedField.label }
                                </label>
                                { nestedField.type === 'select' ? (
                                    // <select
                                    //     value={ inputValue }
                                    //     className="basic-select"
                                    //     onChange={ ( e ) =>
                                    //         handleFieldChange(
                                    //             rowIndex,
                                    //             nestedField.key,
                                    //             e.target.value
                                    //         )
                                    //     }
                                    // >
                                    //     <option value="">Select</option>
                                    //     { nestedField.options?.map( ( opt ) => (
                                    //         <option
                                    //             key={ opt.value }
                                    //             value={ opt.value }
                                    //         >
                                    //             { opt.label }
                                    //         </option>
                                    //     ) ) }
                                    // </select>
                                    <div>
                                        
                                    </div>
                                ) : (
                                    <input
                                        type="number"
                                        value={ inputValue }
                                        placeholder={
                                            nestedField.placeholder || ''
                                        }
                                        className="basic-input"
                                        onChange={ ( e ) =>
                                            handleFieldChange(
                                                rowIndex,
                                                nestedField.key,
                                                e.target.value
                                            )
                                        }
                                    />
                                ) }
                            </div>
                        );
                    } ) }

                    <div className="buttons-wrapper">
                        { rowIndex === rows.length - 1 && (
                            <button
                                type="button"
                                className="admin-btn btn-green"
                                onClick={ addRow }
                            >
                                <i className="adminlib-vendor-form-add"></i>
                                { addButtonLabel }
                            </button>
                        ) }
                        { rows.length > 1 && (
                            <button
                                type="button"
                                className="admin-btn btn-red"
                                onClick={ () => removeRow( rowIndex ) }
                            >
                                <i className="adminlib-close"></i>
                                { deleteButtonLabel }
                            </button>
                        ) }
                    </div>
                </div>
            ) ) }
        </div>
    );
};

export default NestedComponent;
