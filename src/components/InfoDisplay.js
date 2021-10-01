import React from 'react'

const InfoDisplay = ({info, api}) => {

    const fixInfo = (param) => {
      let fixed = param.replace("[", "").replace("]", "");
      return fixed;
    };

    return (
      <div>
        { info.map((item) => (
            <div>
              <img src={api + item.image}></img>
              <p>Google Cloud Vision API detected these images labels:</p>
              <p>{fixInfo(item.name)}</p>
            </div>
          ))}
      </div>
    );
}

export default InfoDisplay
