import './Types.css';

function Types() {
    return (
    <article className='ms_types'>
        <div className='container'>
        <p className='ms_types_title'>8가지 투자유형</p>
        <p className='ms_types_question'>나는 어떤 유형의 투자자일까요?</p>
        <p className='ms_types_desc'>수익과 안정 중 더 추구하는 가치는 무엇인지, 위험성향은 어느정도인지, ESG를 얼마나 고려하는지 등을 종합적으로 판단하여 투자유형을 진단합니다.</p>
        <ul className='ms_types_list'>
            <li>
                <a href='type/1'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li>
                <a href='type/2'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li><a href='type/3'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li>
                <a href='type/4'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li>
                <a href='type/5'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li>
                <a href='type/6'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li><a href='type/7'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
            <li>
                <a href='type/8'>
                    <img src='#'></img>
                    <p>스릴을 즐기는<br></br> 투자야망인</p>
                </a>
            </li>
        </ul>
        <a href='test' className='test_btn'>투자유형 검사하기</a>
        </div>
    </article>
    );
  }
  
  export default Types;