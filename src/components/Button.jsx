const Button = ({ children, className = "", ...props }) => (
    <button {...props} className={className}>
        {children}
    </button>
);

export default Button;
