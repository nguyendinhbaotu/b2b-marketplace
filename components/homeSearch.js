import { useState, useEffect } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { AutoComplete } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { getCountries } from '../pages/api/CountryService';

const groupedCities = [
    {
        label: 'General Purpose', code: 'GP',
        items: [
            { label: '20GP Dry Standard', value: '20GPDS' },
            { label: '40GP Dry Standard', value: '40GPDS' },
            { label: '40HQ Dry High Cube', value: '40HQDHC' },
            { label: '45HQ Dry High Cube', value: '45HQDHC' }
        ]
    },
    {
        label: 'Tank', code: 'TANK',
        items: [
            { label: '20TK Tank', value: '20TK' },
            { label: '40TK Tank', value: '40TK' },
        ]
    },
    // {
    //     label: 'USA', code: 'US',
    //     items: [
    //         { label: 'Chicago', value: 'Chicago' },
    //         { label: 'Los Angeles', value: 'Los Angeles' },
    //         { label: 'New York', value: 'New York' },
    //         { label: 'San Francisco', value: 'San Francisco' }
    //     ]
    // },
    // {
    //     label: 'Japan', code: 'JP',
    //     items: [
    //         { label: 'Kyoto', value: 'Kyoto' },
    //         { label: 'Osaka', value: 'Osaka' },
    //         { label: 'Tokyo', value: 'Tokyo' },
    //         { label: 'Yokohama', value: 'Yokohama' }
    //     ]
    // }
];

export default function HomeSearch() {
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedGroupedCity, setSelectedGroupedCity] = useState(null);

    useEffect(() => {
        getCountries().then(data => setCountries(data));
    }, []);

    const searchCountry = (event) => {
        setTimeout(() => {
            if (!event.query.trim().length) {
                filteredCountries = [...countries];
            }
            else {
                filteredCountries = countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }
            setFilteredCountries(filteredCountries);
        }, 250);
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                {/* <img alt={item.name} src={`https://www.primefaces.org/images/flag/flag_placeholder.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} /> */}
                <div>{item.name}</div>
            </div>
        );
    }

    return (
        <div className="home-search-container">
            <img className="home-search-container-bg" src={`logistics.webp`} />
            <div className="home-search-box">
                <div className="card">
                    <h5>Default</h5>
                    <TabView>
                        <TabPanel header="SEA (FCL)">
                            <div className="flex">
                                <div className="home-search-from">
                                    {/* <h5>From</h5> */}
                                    <AutoComplete 
                                        value={selectedCountry2} 
                                        suggestions={filteredCountries} 
                                        completeMethod={searchCountry} 
                                        field="name" dropdown forceSelection 
                                        itemTemplate={itemTemplate} 
                                        onChange={(e) => {setSelectedCountry2(e.value)} }
                                        aria-label="Countries" 
                                        placeholder='-- From --'
                                    />
                                </div>
                                <div className="ml-1 home-search-to">
                                    {/* <h5>To</h5> */}
                                    <AutoComplete 
                                        value={selectedCountry2} 
                                        suggestions={filteredCountries} 
                                        completeMethod={searchCountry} 
                                        field="name" dropdown forceSelection 
                                        itemTemplate={itemTemplate} 
                                        onChange={(e) => {setSelectedCountry2(e.value)} }
                                        aria-label="Countries" 
                                        placeholder='-- To --'
                                    />
                                </div>
                                <div className="ml-1 home-search-container-type">
                                    <Dropdown 
                                        value={selectedGroupedCity} 
                                        options={groupedCities} 
                                        onChange={e => setSelectedGroupedCity(e.value)} 
                                        optionLabel="label" 
                                        optionGroupLabel="label" 
                                        optionGroupChildren="items"
                                        placeholder='-- Select Container --'
                                    />
                                </div>
                            </div>
                            <div className="flex">
                                <Button className="mt-2 ml-auto p-button-warning" label="SEARCH" />
                            </div>
                            
                            {/* <h5>To</h5>
                            <AutoComplete 
                                value={selectedCountry2} 
                                suggestions={filteredCountries} 
                                completeMethod={searchCountry} 
                                field="name" dropdown forceSelection 
                                itemTemplate={itemTemplate} 
                                onChange={(e) => {setSelectedCountry2(e.value)} }
                                aria-label="Countries" 
                            /> */}
                        </TabPanel>
                        <TabPanel header="SEA (LCL)">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
                        </TabPanel>
                        <TabPanel header="AIR FRIEGHT">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </div>
    )
}