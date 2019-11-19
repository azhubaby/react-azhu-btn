import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class extends React.Component {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'default', 'danger']),
        disabled: PropTypes.oneOf([true, false]),
        size: PropTypes.oneOf(['md', 'lg', 'sm']),
    };

    static defaultProps = {
        type: 'default',
        disabled: false,
        size: 'md',
    };

    render() {
        const {type, disabled, size, children, onClick} = this.props;
        const _classType = `azhu-btn-${type}`;
        const _classSize = `azhu-btn-${size}`;

        const _class = `azhu-btn ${_classType} ${_classSize}`;

        return (
            <button onClick={onClick} disabled={disabled} className={_class} type="button">
                {children}
            </button>
        );
    }
}
