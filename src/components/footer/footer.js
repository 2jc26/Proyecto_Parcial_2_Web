import { FormattedMessage } from 'react-intl';
import './footer.css';

function Pie() {
    return (
        <div className="footer">
            <p className="textopie">
                <FormattedMessage id="Contactus"/>
            </p>
        </div>
    );
}

export default Pie;