import Chart from '../components/Chart';
import './TypePage.css';
import { useParams } from 'react-router-dom';

function TypePage() {
    const { id } = useParams();
    const type_list = [['트렌디한 월스트리트인',
                        '트렌디한 월스트리트인들은 수익을 중요시합니다. 이들은 기업의 현재가치를 분석하여 투자결정을 내리고, ESG에 관하여 엄격한 잣대를 보유하고 있습니다.'],
                       ['스릴을 즐기는 투자야망인',
                       '스릴을 즐기는 투자야망인은 수익을 중요시합니다. 기업의 현재가치를 분석하여 투자결정을 내리지만 기회가 있다면 ESG 트렌드에 부합하지 않더라도 뛰어들 준비가 되어 있습니다.'],
                       ['개척하는 모험가','개척하는 모험가는 수익을 중시할 뿐만 아니라, 미래의 기업가치를 분석하여 투자결정을 내립니다. ESG 가치를 존중하지만, 우선순위는 단연 수익입니다.'],
                       ['실리콘밸리형 미래 기업인','실리콘밸리형 미래기업인은 수익에 집중하고, 기업의 미래가치를 제고하여 투자결정을 내립니다. ESG는 거스를 수 없는 전세계적인 추세라고 생각하며, 그에 따라 기업의 사회, 환경, 거버넌스에 대한 공헌을 중요시합니다.'],
                       ['중재하는 이상주의자','중재하는 이상주의자들은 투자할 때 미래비전을 중시하지만, 현재의 안정 역시 중요하게 생각하여 타협합니다. 이들은 ESG에 대한 엄격한 잣대를 보유하고 있습니다.'],
                       ['소확행의 현실주의자','소확행의 현실주의자는 적은 위험, 적은 수익을 추구합니다. 이들에게 투자는 단기적이고 부수적인 요소이며 현재 기업의 가치를 중요시합니다.'],
                       ['책임있는 CEO','책임있는 CEO로서 이들은 ESG에 대하여 엄격한 잣대를 요구하며, 무모한 투자보다는 안정적이고 현재가치에 집중하는 투자철학을 보유하고 있습니다.'],
                       ['인내하는 미래비전가','인내하는 미래비전가는 안정적이지만 미래 비전이 확고한 기업들을 선택하여 투자합니다. ESG보다는 현재의 안정 등 현실적인 요소들을 추구합니다.']]

    function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    }
    const type_name_list_fixed =  [['트렌디한', '월스트리트인',1],
                                    ['스릴을 즐기는','투자야망인',2],
                                    ['개척하는', '모험가',3],
                                    ['실리콘밸리형', '미래 기업인',4],
                                    ['중재하는', '이상주의자',5],
                                    ['소확행의', '현실주의자',6],
                                    ['책임있는', 'CEO',7],
                                    ['인내하는', '미래비전가',8]]
    const type_name_list =  [['트렌디한', '월스트리트인',1],
                            ['스릴을 즐기는','투자야망인',2],
                            ['개척하는', '모험가',3],
                            ['실리콘밸리형', '미래 기업인',4],
                            ['중재하는', '이상주의자',5],
                            ['소확행의', '현실주의자',6],
                            ['책임있는', 'CEO',7],
                            ['인내하는', '미래비전가',8]]
    shuffle(type_name_list)

    return (
    <div className='ms_typepage'>
        <div className='ms_typepage_desc'>
            <div className='container'>
                <h3>{'8가지 투자유형 > '+type_list[id-1][0]}</h3>
                <h1>{type_name_list_fixed[id-1][0]}<br></br>{type_name_list_fixed[id-1][1]}</h1>
                <p>{type_list[id-1][1]}</p>
                <img src={'../../type'+id+'.png'} alt='img'/>
            </div>
        </div>
        <div className='ms_typepage_index'>
            <div className='container'>
                <div className='ms_typepage_index_left'>
                    <h3><span>'{type_list[id-1][0]}'</span> 에게 추천하는 경제지표를 소개합니다!</h3>
                    <p>경제지표가 어떻게 만들어졌는지 간략한 설명을 돕는 텍스트가 들어가는 자리입니다. 아래에 지표에 대해 소개하면 됩니다.대략 2줄에서 3줄정도 들어가면 되겠습니다.</p>
                </div>
                <a href={"/type"+id+".pdf"} target="_blank">유형과 지표 설명 PDF받기</a>
            </div>
        </div>
        <div className='ms_typepage_chart'>
            <div className='container'>
                <div className='ms_typepage_chart_index'>
                    <h1>3521.20</h1>
                    <div>
                        <p className='index_tag'><span>+2.51</span><span>+0.09%</span></p>
                        <p className='update'>2023.03 기준, 1달 단위 업데이트</p>
                    </div>
                </div>
                <Chart id={id}/>
            </div>
        </div>
        <div className='ms_typepage_other'>
            <div className='container'>
                <h3>나와 비슷하거나 다른 유형도 구경해보세요!</h3>
                <ul className='ms_types_list'>
                    {type_name_list.slice(0,4).map((item, index)=>{return(
                        <li key={index}>
                            <a href={'../../type/'+(item[2])}>
                                <img src={'../../type'+(item[2])+'.png'}></img>
                                <p>{item[0]}<br></br>{item[1]}</p>
                            </a>
                        </li>
                    )})}
                </ul>
            </div>
        </div>
    </div>
    );
  }
  
  export default TypePage;