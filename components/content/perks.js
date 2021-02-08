import React from 'react';
import perksData from '../../utils/perksData';
import List from '../blocks/list';
import { jobs } from '../../utils/copy';

const { perks } = jobs;

const Perks = () => {
    const [selectedPerk, setSelectedPerk] = React.useState(null)
    return (
        <section className="Perks">
            <h2>{perks.heading}</h2>
            <List>
                {perksData.map(({ color, name, title, icon, copy }) => {
                    const isSelected = name === selectedPerk;
                    return(
                    <List.Item 
                        key={name}
                        isSelected={isSelected} 
                        onClick={() => {
                            if (isSelected)  return setSelectedPerk(null)
                            return setSelectedPerk(name)
                        }}
                    >
                        <List.Heading isSelected={isSelected}>
                            <List.Icon color={color}>{icon}</List.Icon>
                            <List.Title>{title}</List.Title>
                        </List.Heading>
                        <List.Copy isSelected={isSelected}>{copy}</List.Copy>
                    </List.Item>)
                })}
            </List>
            <style jsx>
                {`
                    .Perks :global(> h2) {
                        font-size: 36px;
                        text-align: center;
                    }
                `}
            </style>
        </section>
    )
}

export default Perks;