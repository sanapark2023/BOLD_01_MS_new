import { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import 'survey-core/defaultV2.min.css';
import './SurveyComponent.css';
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
StylesManager.applyTheme("defaultV2");

const surveyJson = {
  pageNextText: "다음",
  pagePrevText: "이전",
  completeText: "완료",
  showProgressBar: "top",
  //showCompletedPage: false,
  pages: [{
      elements: [{
          name: '1',
          title: "연령대가 어떻게 되십니까?",
          type: "radiogroup",
          choices: [
              { value: 1, text: "10 - 20대" },
              { value: 2, text: "20 - 30대" },
              { value: 3, text: "30 - 40대" },
              { value: 4, text: "40대 이상" }
          ],
          isRequired: true,
          requiredErrorText: "필수 응답 문항입니다."
      }]
  }, {
    elements: [{
        name: '2',
        title: "연소득이 어떻게 되시나요?",
        type: "radiogroup",
        choices: [
            { value: 1, text: "3,000만원 미만" },
            { value: 2, text: "3,000만원 이상 4,500만원 미만" },
            { value: 3, text: "4,500만원 이상 7,500만원 미만" },
            { value: 4, text: "7,500만원 미만" }
        ],
        isRequired: true,
        requiredErrorText: "필수 응답 문항입니다."
    }]
}, {
  elements: [{
      name: '3',
      title: "금융투자상품(주식, 펀드. 채권 등)의 구조와 종류에 대하여 어느 정도 이해하고 계시나요?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "거의 이해하지 못해요" },
          { value: 2, text: "조금 이해해요" },
          { value: 3, text: "깊이 있게 이해해요" },
          { value: 4, text: "대부분 이해하고 있어요" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
}, {
  elements: [{
      name: '4',
      title: "직접투자 경험이 있으시나요?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "있다, 1년 미만" },
          { value: 2, text: "있다, 1-3년" },
          { value: 3, text: "있다, 3년 이상" },
          { value: 4, text: "없다" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
}, {
  elements: [{
      name: '5',
      title: "손실 또는 저조한 수익률로 인하여 투자를 중단한 적이 있으시나요?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "있다, 저조한 수익 또는 10% 미만의 손실로 인하여" },
          { value: 2, text: "있다, 10-30% 손실로 인하여" },
          { value: 3, text: "있다, 30% 이상의 손실로 인하여" },
          { value: 4, text: "없다" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
}, {
  elements: [{
      name: '6',
      title: "투자하실 때 수익 및 위험에 대하여 어떤 성향을 추구하시나요?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "저수익 저위험" },
          { value: 2, text: "고수익 고위험" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
},{
  elements: [{
      name: '7',
      title: "투자금을 어떻게 활용하실 계획이십니까?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "은퇴자금 마련" },
          { value: 2, text: "여행경비, 자동차 구매자금 등 여유자금 마련" },
          { value: 3, text: "생활비 등 필수자금 마련" },
          { value: 4, text: "현재 자녀 교육비용 또는 피부양인 부양비 마련" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
}, {
  elements: [{
      name: '8',
      title: "투자대상의 ESG 현황에 대하여 어떻게 생각하시나요?",
      type: "radiogroup",
      choices: [
          { value: 1, text: "전혀 상관하지 않는다" },
          { value: 2, text: "최소한의 ESG 규정만 달성" },
          { value: 3, text: "상당한 수준의 ESG 기준을 달성" },
          { value: 4, text: "엄격한 잣대의 ESG 기준을 자체설정 및 달성" }
      ],
      isRequired: true,
      requiredErrorText: "필수 응답 문항입니다."
  }]
}]}

function SurveyComponent() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onComplete = useCallback((survey) => {
    setOpen(true)
    axios.get('http://localhost:5000/api/submit-survey', {
      withCredentials: true,
      params: {
        surveyData: JSON.stringify(survey.data)
      }
    }).then(response => {
      navigate('/type/'+response.data.type);
      setOpen(false)
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const model = new Model(surveyJson);

  return (<>
    {open === false ? (<Survey
      model={model}
      onComplete={onComplete}
    />) :( 
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )}</>
  );
}

export default SurveyComponent;