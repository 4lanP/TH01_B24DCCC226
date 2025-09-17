import React, { useState } from "react";
function ColorBox({color}) {
    return(
        <div style={{width: '100px', height: '100px', backgroundColor: color, margin: '10px', border: '1px solid #000'}}></div>
    )
}
function ColorPicker() {
    const [color, setColor] = useState('white');
    return(
        <div>
            <h4>Chọn màu</h4>
            <button onClick={() => setColor('red')}>Đỏ</button>
            <button onClick={() => setColor('green')}>Xanh</button>
            <button onClick={() => setColor('yellow')}>Vàng</button>
            <ColorBox color={color} />
        </div>
    )
}
export default ColorPicker;