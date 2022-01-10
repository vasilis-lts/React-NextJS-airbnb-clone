export default function ButtonBase({ color, text }) {
  return (
    <button type="button" className={`base-button ${color}`}>
      <div className="button-content">
        <div className="button-text">
          {text}
        </div>
      </div>

      <style jsx>{`
      .base-button{
        text-align: center;
        cursor: pointer;
        padding: 10px 24px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 24px;
      }
      .base-button.blue {
          border: none;
          background-color: #19255b;
          color: #fff;
      }
      .base-button.green {
          border: none;
          background-color: #46ad48;
          color: #fff;
      }
    `}</style>
    </button>
  )
}