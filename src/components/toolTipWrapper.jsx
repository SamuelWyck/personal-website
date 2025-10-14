import "../styles/toolTipWrapper.css";



function ToolTipWrapper({children, toolTip}) {
    return (
        <div className="tool-tip-wrapper">
            <div className="tool-tip">{toolTip}</div>
            {children}
        </div>
    );
};



export default ToolTipWrapper;