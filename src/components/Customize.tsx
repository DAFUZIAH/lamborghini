import React from 'react'

function Customize(props: {step: number, setStep: React.Dispatch<number>}) {

  const { step, setStep } = props

  return (
    <div className='custom-section'>
        <div className="select-color">
          <div className="select-section">
            <div className="select-name selected">
              <i>COLOR</i>
            </div>
            <div className="select-name">
              <i>RIMS</i>
            </div>
            <div className="select-name">
              <i>CALIPERS</i>
            </div>
          </div>
            <div className="color-set">
              <div className="color-set-wrapper">
                <div onClick={() => { setStep( 1 ) }} className='color-picker yellow'>
                  <div className={step === 1 ? 'active' : ''}></div>
                </div>
                <div onClick={() => { setStep( 2 ) }} className="color-picker red">
                  <div className={step === 2 ? 'active' : ''}></div>

                </div>
                <div onClick={() => { setStep( 3 ) }} className="color-picker blue">
                  <div className={step === 3 ? 'active' : ''}></div>

                </div>
              </div>
              <div className="color-set-wrapper">
                <div onClick={() => { setStep( 4 ) }} className="color-picker grey">
                  <div className={step === 4 ? 'active' : ''}></div>
                </div>
                <div onClick={() => { setStep( 5 ) }} className="color-picker white">
                  <div className={step === 5 ? 'active' : ''}></div>

                </div>
                <div onClick={() => { setStep( 6 ) }} className="color-picker black">
                  <div className={step === 6 ? 'active' : ''}></div>

                </div>
              </div>
            </div>
        </div>
        <div className="product">
            <h1 className="product-name">AVENTADOR</h1>
            <img src={`../../img/Aventador-${step}.webp`} alt="Product." />
        </div>
    </div>
  )
}

export default Customize