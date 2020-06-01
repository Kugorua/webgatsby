import React, { useState } from "react";

export default function WrapListItem(WrapComponemt) {
  const Witch = (props) => {
    let [isShow, setIsShow] = useState(false);
    const clickShowList = () => {
      setIsShow(!isShow);
    };
    return (
      <>
        <WrapComponemt
          clickShowList={clickShowList}
          isShow={isShow}
          {...props}
        />
      </>
    );
  };
  return Witch;
}
