import React from 'react';

import './Form.css';

const Form = () => {


    return (
        <form className="orderForm" onSubmit={console.log("submitted")}>
            <div>
                <label>
                    Obvod budovy:
                </label>
                <input 
                    type="text"
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Výška budovy:
                </label>
                <input 
                    type="text"
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Výška budovy k okapu:
                </label>
                <input 
                    type="text"
                    placeholder="Uvádějte v metrech" 
                />
            </div>
            <div>
                <label>
                    Délka hřebenu:
                </label>
                <input 
                    type="text"
                    placeholder="Uvádějte v metrech"
                />
            </div>
            <div>
                <label>
                    Typ střešní krytiny:
                </label>
                <input 
                    type="text"
                    placeholder="Uvádějte v metrech" 
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
                            name="antenta"
                            value="yes"
                        />
                    </label>
                    <label>
                        Ne
                        <input 
                            type="radio"
                            name="antenta"
                            value="no"
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
                            name="grounding"
                            value="yes"
                        />
                    </label>
                    <label>
                        Ne
                        <input 
                            type="radio"
                            name="grounding"
                            value="no"
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
                />
            </div>
            <div>
                <label>
                    Adresa:
                </label>
                <input 
                    type="text"
                    name="address"
                />
            </div>
            <div>
                <label>
                    Tel.:
                </label>
                <input 
                    type="tel"
                    name="telephone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                />
            </div>
            <div>
                <label>
                    Email:
                </label>
                <input 
                    type="email"
                    name="email"
                />
            </div>
            <div>
                <label>
                    Poznámky:
                </label>
                <textarea 
                    rows="4"
                    name="notes"
                />
            </div>
        
        </form>
    );
};

export default Form;

// Obvod budovy
// Výška budovy
// Výška budovy k okapu
// Délka hřebenu
// Typ střešní krytiny
// Anténa ano/ne
// Zemnění ano/ne (pokud ano vyskočí další kolonka s počtem)
// Jméno
// Adresa
// Telefon
// E-mail
// Kolonka na poznámky 
// Možnost vložit nějaké fotky