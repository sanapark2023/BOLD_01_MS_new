def get_investment_preference_result(survey_data):
    profit, esg, future_vision = 0, 0, 0
    if survey_data["1"] == 1:
        profit += 4
        esg += 4
        future_vision += 4
    elif survey_data["1"] == 2:
        profit += 3
        esg += 3
        future_vision += 3
    elif survey_data["1"] == 3:
        profit += 2
        esg += 2
        future_vision += 2
    else:
        profit += 1
        esg += 1
        future_vision += 1
    if survey_data["3"] == 1:
        profit += 1
    elif survey_data["3"] == 2:
        profit += 2
    elif survey_data["3"] == 3:
        profit += 3
    else:
        profit += 4
    if survey_data["4"] == 1:
        profit += 1
    elif survey_data["4"] == 2:
        profit += 2
    elif survey_data["4"] == 3:
        profit += 3
    else:
        profit += 4
    if survey_data["5"] == 1:
        profit += 2
    elif survey_data["5"] == 2:
        profit += 4
    elif survey_data["5"] == 3:
        profit += 6
    else:
        profit += 8
    if survey_data["6"] == 1:
        pass
    else:
        profit += 5
    if survey_data["7"] == 1:
        profit += 1
        future_vision += 2
    elif survey_data["7"] == 2:
        profit += 2
        future_vision += 2
    if survey_data["8"] == 1:
        esg += 2
    elif survey_data["8"] == 2:
        esg += 4
    elif survey_data["8"] == 3:
        esg += 6
    else:
        esg += 8
        
    if profit >= 14 and future_vision < 3 and esg >= 6:
        type = 1
    elif profit >= 14 and future_vision < 3 and esg < 6:
        type = 2
    elif profit >= 14 and future_vision >= 3 and esg < 6:
        type = 3
    elif profit >= 14 and future_vision >= 3 and esg >= 6:
        type = 4
    elif profit < 14 and future_vision >= 3 and esg >= 6:
        type = 5
    elif profit < 14 and future_vision < 3 and esg < 6:
        type = 6
    elif profit < 14 and future_vision < 3 and esg >= 6:
        type = 7
    else:
        type = 8
    return type