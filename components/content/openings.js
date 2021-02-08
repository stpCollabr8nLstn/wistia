import { jobs } from '../../utils/copy';
import BodyText from '../blocks/body-text';
import TitleText from '../blocks/title-text';
import jobData from '../../jobs-data.json';
import { Fragment } from 'react';
import LinkList from '../blocks/link-list';

const { openings } = jobs;

const Openings = () => {
    return (
        <section className="Openings">
            <TitleText align="center">{openings.heading}</TitleText>
            <BodyText>{openings.body}</BodyText>
            {jobData.map(({ id, name, jobs }) => (
                <LinkList key={id}>
                    {Boolean(jobs.length) && 
                        <Fragment>
                            <LinkList.Section>
                                {name}
                            </LinkList.Section>
                            <LinkList.ItemList>
                                {jobs.map(({ title, id, absolute_url }) => (
                                    <LinkList.Item key={id} href={absolute_url}>{title}</LinkList.Item>
                                ))}
                            </LinkList.ItemList>
                        </Fragment>
                    }
                </LinkList>
                
            ))}
            <style jsx>
                {`
                    .Openings {
                        max-width: 50%;
                        margin: 104px auto;
                    }
                `}
            </style>
        </section>
    )
}

export default Openings;