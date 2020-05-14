import React, { useState } from 'react';

import './Form.css';

const Form = () => {

    const [ formData, setFormData ] = useState({
        obvod: '',
        vyska: '',
        vyskaOkap: '',
        delka: '',
        typKrytiny: '',
        antena: '',
        zemneni: '',
        name: '',
        city: '',
        street: '',
        telephone: '',
        email: '',
        notes: ''
    });

    const handleFormData = event => {
        console.log(formData)
        const { name, value } = event.target;
        setFormData(prevState => {
            return {...prevState, [name]: value};
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <form className="orderForm" onSubmit={() => handleSubmit()}>
            <div>
                <label>
                    Obvod budovy:
                </label>
                <input 
                    type="text"
                    name="obvod"
                    value={formData.obvod}
                    onChange={e => handleFormData(e)}
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Výška budovy:
                </label>
                <input 
                    type="text"
                    name="vyska"
                    onChange={handleFormData}
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Výška budovy k okapu:
                </label>
                <input 
                    type="text"
                    name="vyskaOkap"
                    onChange={handleFormData}
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Délka hřebenu:
                </label>
                <input 
                    type="text"
                    name="delka"
                    onChange={handleFormData}
                    placeholder="Uvádějte v metrech"
                />
            </div>
            <div>
                <label>
                    Typ střešní krytiny:
                </label>
                <input 
                    type="text"
                    name="typKrytiny"
                    onChange={handleFormData}
                    placeholder="Tašky, plech,.." 
                />
            </div>
            <div>
                <label>
                    Anténa:
                </label>
                <div>
                    <label>
                        Ano
                        <input 
                            type="radio" 
                            name="antena"
                            value="yes"
                            onChange={handleFormData}
                        />
                    </label>
                    <label>
                        Ne
                        <input 
                            type="radio"
                            name="antena"
                            value="no"
                            onChange={handleFormData}
                        />
                    </label>
                </div>
            </div>
            <div>
                <label>
                    Zemnění:
                </label>
                <div>
                    <label>
                        Ano
                        <input 
                            type="radio" 
                            name="zemneni"
                            value="yes"
                            onChange={handleFormData}
                        />
                    </label>
                    <label>
                        Ne
                        <input 
                            type="radio"
                            name="zemneni"
                            value="no"
                            onChange={handleFormData}
                        />
                    </label>
                </div>
            </div>
            <div>
                <label>
                    Jméno:
                </label>
                <input 
                    type="text"
                    name="name"
                    onChange={handleFormData}
                    placeholder="Josef Novák"
                />
            </div>
            <div>
                <label>
                    Město, PSČ:
                </label>
                <input 
                    type="text"
                    name="city"
                    onChange={handleFormData}
                    placeholder="Praha, 100 01"
                />
            </div>
            <div>
                <label>
                    Ulice č.p.:
                </label>
                <input 
                    type="text"
                    name="street"
                    onChange={handleFormData}
                    placeholder="Květinová 53"
                />
            </div>
            <div>
                <label>
                    Tel.:
                </label>
                <input 
                    type="tel"
                    name="telephone"
                    onChange={handleFormData}
                    placeholder="123 456 789"
                />
            </div>
            <div>
                <label>
                    Email:
                </label>
                <input 
                    type="email"
                    name="email"
                    onChange={handleFormData}
                    placeholder="vášEmail@email.cz"
                />
            </div>
            <div>
                <label>
                    Poznámky:
                </label>
                <textarea 
                    rows="4"
                    name="notes"
                    onChange={handleFormData}
                    placeholder="Prostor pro poznámky"
                />
            </div>

            <button type="submit" value="Submit">
                Submit
            </button>
        </form>
    );
};

export default Form;