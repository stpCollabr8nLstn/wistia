import LongForm from "../blocks/long-form";
import { jobs } from "../../utils/copy";

const BeYourself = () => {
    const { beYourself } = jobs;
    return (
        <LongForm>
            <LongForm.Headline>{beYourself.heading}</LongForm.Headline>
            <LongForm.Body>
                {beYourself.body1}
                <a href="#">{beYourself.bodyLink}</a>
                {beYourself.body2}
            </LongForm.Body>
            
            <LongForm.Media>
                <img
                    src="../../../static/images/be-yourself.png"
                    alt={beYourself.alt}
                />
            </LongForm.Media>
        </LongForm>
    )
}

export default BeYourself;