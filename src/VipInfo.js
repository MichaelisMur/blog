import React from 'react'

const VipInfo = (props) => {
    if(props.code!==undefined){
        let sign;
        switch(props.code){
            case 0:
                sign = "Непосвященным отображается весь пост";
                break
            case 1:
                sign = "Непосвященные видят все кроме комментов";
                break
            case 2:
                sign = "Непосвященные видят только картинку";
                break
            case 3:
                sign = "Пост доступен только посвященным";
                break
            default:
        }
        return(
            // <div>
                <img src="http://localhost:3001/public/info.png" alt="" className="VipInfo" title={sign}  />
            // {/* </div> */}
        )
    } else {
        return(
            <div></div>
        )
    }
}

export default VipInfo