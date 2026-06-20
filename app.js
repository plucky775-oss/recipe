const RECIPES = [
  {
    "id": 1,
    "title": "블루베리 삶은계란 아침접시",
    "category": "아침",
    "time": "10분",
    "method": "삶기",
    "tags": [
      "저염",
      "단백질",
      "과일소량",
      "간단"
    ],
    "main": "계란 1개를 기본으로 하고 블루베리와 사과를 소량 곁들인 아침 메뉴입니다.",
    "ingredients": [
      "삶은계란 1개",
      "블루베리 한 줌",
      "사과 1/3개",
      "무가당 그릭요거트 2큰술 선택"
    ],
    "steps": [
      "계란은 완숙으로 삶아 반으로 자릅니다.",
      "사과는 껍질째 얇게 썰고 블루베리는 씻어 물기를 뺍니다.",
      "혈당이 걱정되면 계란을 먼저 먹고 과일을 나중에 먹습니다."
    ],
    "sodiumTip": "소금 없이 먹고, 필요하면 후추나 레몬즙만 아주 소량 사용하세요.",
    "caution": "LDL이 높게 나오는 시기에는 매일 노른자 2개 고정은 피하세요."
  },
  {
    "id": 2,
    "title": "사과 양배추 낫또 샐러드",
    "category": "콩·발효",
    "time": "8분",
    "method": "생채",
    "tags": [
      "저염",
      "콩류",
      "식이섬유",
      "장건강"
    ],
    "main": "낫또를 짜지 않게 먹기 위한 아침 또는 가벼운 점심 샐러드입니다.",
    "ingredients": [
      "낫또 1팩",
      "양배추 2줌",
      "사과 1/4개",
      "오이 1/3개",
      "들기름 1작은술",
      "식초 1작은술"
    ],
    "steps": [
      "양배추와 오이는 얇게 채 썹니다.",
      "낫또는 기본 소스의 절반 이하만 넣거나 빼고 젓습니다.",
      "채소와 사과를 담고 낫또, 들기름, 식초를 올립니다."
    ],
    "sodiumTip": "낫또 동봉 간장소스는 절반 이하만 사용하면 나트륨을 크게 줄일 수 있습니다.",
    "caution": "와파린 같은 항응고제를 복용 중이면 낫또 섭취는 주치의에게 확인하세요."
  },
  {
    "id": 3,
    "title": "브로콜리 두부 들기름무침",
    "category": "채소반찬",
    "time": "12분",
    "method": "데치기",
    "tags": [
      "저염",
      "십자화과",
      "두부",
      "들기름"
    ],
    "main": "브로콜리와 두부로 단백질과 식이섬유를 함께 챙기는 기본 반찬입니다.",
    "ingredients": [
      "브로콜리 1/2송이",
      "부침두부 1/2모",
      "들기름 1작은술",
      "깨 1작은술",
      "다진 마늘 아주 소량"
    ],
    "steps": [
      "브로콜리는 1분 30초 정도 데쳐 찬물에 헹굽니다.",
      "두부는 끓는 물에 2분 데쳐 물기를 뺍니다.",
      "브로콜리와 으깬 두부에 들기름과 깨를 넣고 가볍게 무칩니다."
    ],
    "sodiumTip": "소금 대신 깨, 마늘, 들기름 향으로 맛을 냅니다.",
    "caution": "들기름은 가열하지 말고 마지막에 넣으세요."
  },
  {
    "id": 4,
    "title": "콜리플라워 부드러운 달걀찜",
    "category": "계란·닭",
    "time": "15분",
    "method": "찜",
    "tags": [
      "저염",
      "부드러운식",
      "단백질",
      "십자화과"
    ],
    "main": "속이 편하고 씹기 쉬운 저염 달걀찜입니다.",
    "ingredients": [
      "계란 1개",
      "흰자 1개 선택",
      "콜리플라워 잘게 다진 것 1/2컵",
      "물 120ml",
      "쪽파 조금"
    ],
    "steps": [
      "계란과 물을 잘 풀어 체에 한 번 거릅니다.",
      "잘게 다진 콜리플라워를 넣고 약불에서 10분 찝니다.",
      "쪽파를 올리고 2분 더 뜸을 들입니다."
    ],
    "sodiumTip": "간장은 넣지 말고, 먹을 때 레몬즙 한두 방울로 풍미를 더하세요.",
    "caution": "계란을 매일 2개 먹는 날이 많으면 노른자 양을 조절하세요."
  },
  {
    "id": 5,
    "title": "저염 청국장 채소찌개",
    "category": "콩·발효",
    "time": "20분",
    "method": "끓이기",
    "tags": [
      "저염",
      "청국장",
      "콩류",
      "채소많이"
    ],
    "main": "청국장은 유지하되 국물과 장 양을 줄인 방식입니다.",
    "ingredients": [
      "청국장 1큰술",
      "두부 1/2모",
      "애호박 1/4개",
      "버섯 한 줌",
      "양배추 한 줌",
      "물 350ml"
    ],
    "steps": [
      "물에 애호박, 버섯, 양배추를 먼저 끓입니다.",
      "채소가 익으면 두부를 넣고 청국장을 마지막에 풉니다.",
      "국물보다 건더기를 중심으로 담습니다."
    ],
    "sodiumTip": "청국장은 1큰술부터 시작하고, 김치·젓갈은 함께 먹지 않는 날로 잡으세요.",
    "caution": "식당 청국장은 짤 수 있으니 집에서는 묽고 건더기 많게 만드세요."
  },
  {
    "id": 6,
    "title": "낫또 오이 연두부 비빔",
    "category": "콩·발효",
    "time": "7분",
    "method": "비빔",
    "tags": [
      "저염",
      "낫또",
      "두부",
      "간단"
    ],
    "main": "소스 없이도 부드럽게 먹는 낫또 두부 메뉴입니다.",
    "ingredients": [
      "낫또 1팩",
      "연두부 1팩",
      "오이 1/3개",
      "김가루 무염 제품 조금",
      "들기름 1작은술"
    ],
    "steps": [
      "연두부를 그릇에 담고 물기를 살짝 뺍니다.",
      "오이를 잘게 썰어 올립니다.",
      "낫또를 충분히 저은 뒤 올리고 들기름을 더합니다."
    ],
    "sodiumTip": "무염 김가루를 쓰고 낫또 소스는 빼거나 1/3만 넣으세요.",
    "caution": "짜게 느껴지지 않아도 동봉 소스에는 나트륨이 들어갑니다."
  },
  {
    "id": 7,
    "title": "연두부 토마토 올리브접시",
    "category": "채소반찬",
    "time": "8분",
    "method": "생채",
    "tags": [
      "저염",
      "토마토",
      "두부",
      "부드러운식"
    ],
    "main": "토마토와 두부를 간단히 곁들인 저녁 전채 메뉴입니다.",
    "ingredients": [
      "연두부 1팩",
      "방울토마토 6개",
      "양파 아주 소량",
      "올리브오일 1작은술",
      "후추"
    ],
    "steps": [
      "방울토마토를 반으로 자릅니다.",
      "연두부 위에 토마토와 양파를 올립니다.",
      "올리브오일과 후추를 뿌립니다."
    ],
    "sodiumTip": "간장 드레싱 대신 올리브오일과 후추로 마무리하세요.",
    "caution": "시판 발사믹 드레싱은 당과 나트륨이 들어간 제품이 많습니다."
  },
  {
    "id": 8,
    "title": "닭가슴살 양배추쌈",
    "category": "계란·닭",
    "time": "20분",
    "method": "삶기",
    "tags": [
      "저염",
      "닭가슴살",
      "양배추",
      "단백질"
    ],
    "main": "닭가슴살을 짜지 않게 먹는 대표 식사 메뉴입니다.",
    "ingredients": [
      "닭가슴살 120g",
      "양배추 잎 6장",
      "오이채",
      "파프리카채",
      "무가당 겨자소스 소량"
    ],
    "steps": [
      "닭가슴살은 통후추와 대파를 넣은 물에 삶습니다.",
      "양배추는 찜기에 4분 정도 찝니다.",
      "양배추에 닭가슴살과 채소를 넣어 싸 먹습니다."
    ],
    "sodiumTip": "쌈장은 빼고 겨자, 식초, 레몬즙으로 맛을 조절하세요.",
    "caution": "닭가슴살 가공제품은 나트륨이 높을 수 있어 생닭을 삶는 방식이 낫습니다."
  },
  {
    "id": 9,
    "title": "닭가슴살 브로콜리 샐러드",
    "category": "계란·닭",
    "time": "18분",
    "method": "삶기",
    "tags": [
      "저염",
      "단백질",
      "십자화과",
      "도시락"
    ],
    "main": "회사 점심 도시락으로 쓰기 좋은 단백질 샐러드입니다.",
    "ingredients": [
      "삶은 닭가슴살 120g",
      "브로콜리 1컵",
      "양상추",
      "방울토마토",
      "올리브오일 1작은술",
      "레몬즙"
    ],
    "steps": [
      "브로콜리를 데치고 닭가슴살은 결대로 찢습니다.",
      "채소를 담고 닭가슴살을 올립니다.",
      "올리브오일과 레몬즙만 뿌립니다."
    ],
    "sodiumTip": "시판 샐러드 드레싱 대신 레몬즙과 올리브오일을 사용하세요.",
    "caution": "샐러드라도 드레싱을 많이 넣으면 당·나트륨이 늘어납니다."
  },
  {
    "id": 10,
    "title": "닭한마리 스타일 맑은 닭채소탕",
    "category": "국·탕",
    "time": "35분",
    "method": "끓이기",
    "tags": [
      "저염",
      "닭",
      "국물주의",
      "보양"
    ],
    "main": "식당 닭한마리의 장점은 살리고 국물·소스·칼국수 부담을 줄인 메뉴입니다.",
    "ingredients": [
      "닭다리살 또는 닭가슴살 150g",
      "배추 2장",
      "대파",
      "마늘 2쪽",
      "무 1토막",
      "버섯 한 줌"
    ],
    "steps": [
      "닭은 한번 데쳐 기름과 불순물을 제거합니다.",
      "새 물에 무, 대파, 마늘을 넣고 닭을 끓입니다.",
      "배추와 버섯을 넣고 익힌 뒤 건더기 위주로 먹습니다."
    ],
    "sodiumTip": "국물은 1/3 이하만, 소스와 칼국수는 생략하거나 아주 적게 드세요.",
    "caution": "식당에서는 소스와 김치, 칼국수가 나트륨·탄수화물의 주범입니다."
  },
  {
    "id": 11,
    "title": "문어 브로콜리 숙회접시",
    "category": "생선·해산물",
    "time": "15분",
    "method": "삶기",
    "tags": [
      "저염",
      "문어",
      "브로콜리",
      "단백질"
    ],
    "main": "문어를 초장 없이 담백하게 먹는 해산물 단백질 메뉴입니다.",
    "ingredients": [
      "삶은 문어 100g",
      "브로콜리 1컵",
      "콜리플라워 1/2컵",
      "레몬즙",
      "올리브오일 1작은술"
    ],
    "steps": [
      "문어는 충분히 익힌 것을 얇게 썹니다.",
      "브로콜리와 콜리플라워를 데칩니다.",
      "레몬즙과 올리브오일로만 가볍게 버무립니다."
    ],
    "sodiumTip": "초장 대신 레몬즙을 쓰면 당과 나트륨을 줄일 수 있습니다.",
    "caution": "면역력이 떨어진 시기에는 해산물은 반드시 완전히 익혀 드세요."
  },
  {
    "id": 12,
    "title": "대구·동태 저염 지리",
    "category": "국·탕",
    "time": "25분",
    "method": "끓이기",
    "tags": [
      "저염",
      "흰살생선",
      "국물주의",
      "단백질"
    ],
    "main": "동태탕을 맵고 짜게 끓이지 않고 지리 형태로 먹는 방식입니다.",
    "ingredients": [
      "동태 또는 대구 150g",
      "무 1토막",
      "콩나물 한 줌",
      "미나리",
      "대파",
      "마늘",
      "레몬즙"
    ],
    "steps": [
      "무와 콩나물을 먼저 끓여 시원한 맛을 냅니다.",
      "생선을 넣고 완전히 익힙니다.",
      "마지막에 미나리를 넣고 레몬즙으로 마무리합니다."
    ],
    "sodiumTip": "소금은 마지막에 아주 소량만, 국물은 반 이하로 드세요.",
    "caution": "매운 양념장과 국물 완식은 피하는 게 좋습니다."
  },
  {
    "id": 13,
    "title": "복어지리 스타일 흰살생선 맑은탕",
    "category": "국·탕",
    "time": "25분",
    "method": "끓이기",
    "tags": [
      "저염",
      "복어대체",
      "흰살생선",
      "국물주의"
    ],
    "main": "복어지리 느낌을 내되 집에서는 안전한 흰살생선으로 만드는 메뉴입니다.",
    "ingredients": [
      "대구살 150g",
      "무",
      "배추",
      "미나리",
      "버섯",
      "마늘",
      "식초 1작은술"
    ],
    "steps": [
      "무와 배추를 먼저 끓입니다.",
      "대구살과 버섯을 넣고 충분히 익힙니다.",
      "미나리와 식초를 마지막에 넣습니다."
    ],
    "sodiumTip": "국물 맛은 무·배추·미나리로 내고 소금은 최소화하세요.",
    "caution": "복어는 반드시 허가된 전문 식당에서만 드세요."
  },
  {
    "id": 14,
    "title": "고등어 무찜 저염버전",
    "category": "생선·해산물",
    "time": "30분",
    "method": "찜",
    "tags": [
      "생선",
      "오메가3",
      "저염",
      "구이대체"
    ],
    "main": "직화구이 대신 찜으로 먹는 등푸른생선 메뉴입니다.",
    "ingredients": [
      "고등어 1토막",
      "무 2토막",
      "양파 1/4개",
      "대파",
      "마늘",
      "고춧가루 아주 소량 선택"
    ],
    "steps": [
      "무를 먼저 물에 익힙니다.",
      "고등어를 올리고 양파, 대파, 마늘을 넣습니다.",
      "뚜껑을 덮어 중약불에서 익힙니다."
    ],
    "sodiumTip": "간장 양념장을 붓지 말고, 생선 자체 맛과 채소 단맛으로 먹습니다.",
    "caution": "탄 생선 껍질을 만들지 않는 조리법이 핵심입니다."
  },
  {
    "id": 15,
    "title": "연어 버섯찜",
    "category": "생선·해산물",
    "time": "20분",
    "method": "찜",
    "tags": [
      "저염",
      "생선",
      "버섯",
      "단백질"
    ],
    "main": "팬에 태우지 않고 촉촉하게 익히는 연어 메뉴입니다.",
    "ingredients": [
      "연어 120g",
      "표고버섯",
      "팽이버섯",
      "양파 조금",
      "레몬즙",
      "후추"
    ],
    "steps": [
      "찜 종이나 접시에 버섯과 양파를 깝니다.",
      "연어를 올리고 레몬즙과 후추를 뿌립니다.",
      "찜기에 12~15분 익힙니다."
    ],
    "sodiumTip": "소금 대신 레몬즙, 후추, 버섯 향으로 맛을 냅니다.",
    "caution": "훈제연어는 나트륨이 높을 수 있어 생연어를 익히는 편이 낫습니다."
  },
  {
    "id": 16,
    "title": "가자미 양배추찜",
    "category": "생선·해산물",
    "time": "22분",
    "method": "찜",
    "tags": [
      "저염",
      "흰살생선",
      "양배추",
      "부드러운식"
    ],
    "main": "가자미를 양배추와 함께 쪄서 국물 없이 먹는 메뉴입니다.",
    "ingredients": [
      "가자미 1마리 또는 필렛 150g",
      "양배추 2줌",
      "대파",
      "생강 아주 소량",
      "레몬즙"
    ],
    "steps": [
      "찜기에 양배추를 깔고 가자미를 올립니다.",
      "대파와 생강을 조금 넣어 비린내를 줄입니다.",
      "완전히 익힌 뒤 레몬즙을 뿌립니다."
    ],
    "sodiumTip": "간장 찍먹 대신 레몬즙으로 담백하게 먹습니다.",
    "caution": "가시가 있는 생선은 천천히 드세요."
  },
  {
    "id": 17,
    "title": "오징어 콜리플라워 물볶음",
    "category": "생선·해산물",
    "time": "18분",
    "method": "물볶음",
    "tags": [
      "저염",
      "해산물",
      "십자화과",
      "기름적게"
    ],
    "main": "기름을 많이 쓰지 않고 물로 볶듯 익히는 해산물 반찬입니다.",
    "ingredients": [
      "오징어 100g",
      "콜리플라워 1컵",
      "양파",
      "파프리카",
      "마늘",
      "후추"
    ],
    "steps": [
      "팬에 물 3큰술과 마늘을 넣고 끓입니다.",
      "콜리플라워와 양파를 먼저 익힙니다.",
      "오징어를 넣어 완전히 익히고 후추로 마무리합니다."
    ],
    "sodiumTip": "고추장·간장 양념 없이 채소 단맛과 후추로 먹습니다.",
    "caution": "오징어는 오래 익히면 질겨지므로 완전히 익되 과하게 익히지 마세요."
  },
  {
    "id": 18,
    "title": "새우 브로콜리 토마토스튜",
    "category": "생선·해산물",
    "time": "25분",
    "method": "끓이기",
    "tags": [
      "저염",
      "토마토",
      "새우",
      "브로콜리"
    ],
    "main": "토마토의 산미로 소금이 적어도 맛있는 해산물 스튜입니다.",
    "ingredients": [
      "새우 8마리",
      "브로콜리 1컵",
      "토마토 1개",
      "양파 1/4개",
      "마늘",
      "물 150ml"
    ],
    "steps": [
      "토마토와 양파를 잘게 썰어 물과 함께 끓입니다.",
      "브로콜리를 넣고 익힙니다.",
      "새우를 넣어 완전히 익힌 뒤 후추로 마무리합니다."
    ],
    "sodiumTip": "토마토페이스트를 쓸 경우 무염 제품을 고르세요.",
    "caution": "새우 알레르기가 있으면 흰살생선으로 대체하세요."
  },
  {
    "id": 19,
    "title": "추어탕 저염 리메이크",
    "category": "국·탕",
    "time": "30분",
    "method": "끓이기",
    "tags": [
      "저염",
      "추어탕",
      "국물주의",
      "월2회"
    ],
    "main": "한 달 2~3회 먹는 추어탕을 더 안전한 방식으로 조절한 레시피입니다.",
    "ingredients": [
      "추어탕 베이스 1인분",
      "데친 시래기 1컵",
      "숙주 한 줌",
      "부추",
      "들깨가루 1작은술 선택"
    ],
    "steps": [
      "식당 포장 추어탕은 물을 1/3 정도 더해 희석합니다.",
      "시래기와 숙주를 추가해 건더기 비율을 높입니다.",
      "국물은 남기고 건더기 중심으로 먹습니다."
    ],
    "sodiumTip": "산초·후추·부추로 향을 보강하고 소금 추가는 하지 마세요.",
    "caution": "사골육수 베이스는 매일 보양식처럼 먹을 필요가 없습니다."
  },
  {
    "id": 20,
    "title": "사골육수 채소두부탕",
    "category": "국·탕",
    "time": "20분",
    "method": "끓이기",
    "tags": [
      "저염",
      "사골주의",
      "두부",
      "채소많이"
    ],
    "main": "사골육수를 아주 묽게 써서 채소와 두부를 먹는 월 1~2회 메뉴입니다.",
    "ingredients": [
      "사골육수 150ml",
      "물 250ml",
      "두부 1/2모",
      "배추 2장",
      "버섯",
      "대파"
    ],
    "steps": [
      "사골육수와 물을 섞어 염도와 진함을 낮춥니다.",
      "배추와 버섯을 충분히 끓입니다.",
      "두부를 넣고 한 번 더 끓입니다."
    ],
    "sodiumTip": "시판 사골육수는 무염·저염 제품을 고르고 국물은 적게 드세요.",
    "caution": "기름이 많은 제품은 식힌 뒤 위의 굳은 기름을 제거하세요."
  },
  {
    "id": 21,
    "title": "토마토 해산물 통밀스파게티",
    "category": "면·별미",
    "time": "25분",
    "method": "끓이기",
    "tags": [
      "면적게",
      "토마토",
      "해산물",
      "저염"
    ],
    "main": "스파게티를 먹고 싶을 때 면은 줄이고 해산물과 채소를 늘린 버전입니다.",
    "ingredients": [
      "통밀스파게티 50g",
      "새우 또는 오징어 100g",
      "토마토 1개",
      "브로콜리 1/2컵",
      "마늘",
      "올리브오일 1작은술"
    ],
    "steps": [
      "면은 평소 양의 절반 정도만 삶습니다.",
      "토마토와 마늘을 볶지 말고 약불에 뭉근히 익힙니다.",
      "해산물과 브로콜리를 넣고 면과 가볍게 섞습니다."
    ],
    "sodiumTip": "시판 소스는 1~2큰술만 쓰거나 무염 토마토를 사용하세요.",
    "caution": "베이컨·소시지·치즈 추가는 피하세요."
  },
  {
    "id": 22,
    "title": "두부면 토마토 파스타",
    "category": "면·별미",
    "time": "18분",
    "method": "볶지않기",
    "tags": [
      "면대체",
      "저염",
      "토마토",
      "두부"
    ],
    "main": "정제 탄수화물을 줄이고 싶을 때 좋은 파스타 대체식입니다.",
    "ingredients": [
      "두부면 1팩",
      "토마토 1개",
      "양파 조금",
      "버섯",
      "닭가슴살 80g 선택",
      "올리브오일 1작은술"
    ],
    "steps": [
      "두부면은 물에 헹궈 물기를 뺍니다.",
      "토마토, 양파, 버섯을 약불에 익혀 소스를 만듭니다.",
      "두부면과 익힌 닭가슴살을 넣고 섞습니다."
    ],
    "sodiumTip": "시판 토마토소스 대신 생토마토를 쓰면 나트륨을 줄일 수 있습니다.",
    "caution": "두부면도 제품에 따라 나트륨이 있으니 성분표를 확인하세요."
  },
  {
    "id": 23,
    "title": "양배추 닭가슴살 토마토롤",
    "category": "계란·닭",
    "time": "25분",
    "method": "찜",
    "tags": [
      "저염",
      "닭가슴살",
      "양배추",
      "토마토"
    ],
    "main": "양배추쌈을 토마토소스로 촉촉하게 먹는 메뉴입니다.",
    "ingredients": [
      "양배추 잎 6장",
      "삶은 닭가슴살 120g",
      "토마토 1개",
      "양파 조금",
      "버섯"
    ],
    "steps": [
      "양배추 잎을 살짝 찝니다.",
      "닭가슴살과 버섯을 넣고 돌돌 맙니다.",
      "다진 토마토와 양파를 끓인 소스에 롤을 넣어 5분 더 익힙니다."
    ],
    "sodiumTip": "토마토소스에 소금 대신 후추와 허브를 사용하세요.",
    "caution": "시판 소스는 당과 나트륨이 많을 수 있습니다."
  },
  {
    "id": 24,
    "title": "버섯 들기름찜",
    "category": "채소반찬",
    "time": "12분",
    "method": "찜",
    "tags": [
      "저염",
      "버섯",
      "들기름",
      "간단"
    ],
    "main": "버섯의 감칠맛으로 소금을 거의 쓰지 않는 반찬입니다.",
    "ingredients": [
      "표고버섯 3개",
      "팽이버섯 1/2봉",
      "느타리버섯 한 줌",
      "대파 조금",
      "들기름 1작은술"
    ],
    "steps": [
      "버섯을 먹기 좋게 찢거나 썹니다.",
      "찜기에 버섯과 대파를 넣고 6~8분 찝니다.",
      "불을 끈 뒤 들기름을 넣어 섞습니다."
    ],
    "sodiumTip": "간장 없이 버섯 향과 들기름 향으로 먹습니다.",
    "caution": "들기름은 산패가 빠르므로 냉장 보관하고 빨리 사용하세요."
  },
  {
    "id": 25,
    "title": "브로콜리 콜리플라워 순한 카레찜",
    "category": "채소반찬",
    "time": "20분",
    "method": "찜",
    "tags": [
      "저염",
      "십자화과",
      "향신료",
      "채소많이"
    ],
    "main": "카레가루를 아주 소량만 향으로 쓰는 채소 메뉴입니다.",
    "ingredients": [
      "브로콜리 1컵",
      "콜리플라워 1컵",
      "양파 1/4개",
      "닭가슴살 80g 선택",
      "무염 카레가루 1/2작은술"
    ],
    "steps": [
      "채소를 한입 크기로 자릅니다.",
      "물 4큰술에 양파와 채소를 넣고 뚜껑을 덮어 익힙니다.",
      "무염 카레가루를 소량 넣어 향만 입힙니다."
    ],
    "sodiumTip": "일반 카레분말은 나트륨이 높을 수 있어 무염 향신료 제품을 고르세요.",
    "caution": "카레를 짠 소스로 만들지 않는 것이 핵심입니다."
  },
  {
    "id": 26,
    "title": "렌틸콩 토마토수프",
    "category": "콩·발효",
    "time": "30분",
    "method": "끓이기",
    "tags": [
      "저염",
      "콩류",
      "토마토",
      "식이섬유"
    ],
    "main": "청국장·낫또 외에 콩류를 다양화하는 수프입니다.",
    "ingredients": [
      "렌틸콩 1/3컵",
      "토마토 1개",
      "양파 1/4개",
      "당근 조금",
      "셀러리 선택",
      "물 400ml"
    ],
    "steps": [
      "렌틸콩을 씻고 물에 끓입니다.",
      "토마토와 채소를 넣고 부드러워질 때까지 끓입니다.",
      "절반 정도를 으깨 농도를 냅니다."
    ],
    "sodiumTip": "육수큐브 없이 채소와 토마토로 맛을 냅니다.",
    "caution": "콩류 섭취 후 복부팽만이 있으면 양을 줄여 시작하세요."
  },
  {
    "id": 27,
    "title": "귀리 닭채소죽",
    "category": "계란·닭",
    "time": "30분",
    "method": "끓이기",
    "tags": [
      "저염",
      "귀리",
      "닭",
      "부드러운식"
    ],
    "main": "밥죽 대신 귀리와 닭가슴살을 활용한 포만감 있는 메뉴입니다.",
    "ingredients": [
      "귀리 1/4컵",
      "삶은 닭가슴살 80g",
      "양배추 한 줌",
      "버섯",
      "물 500ml"
    ],
    "steps": [
      "귀리는 씻어 물에 끓입니다.",
      "귀리가 부드러워지면 양배추와 버섯을 넣습니다.",
      "찢은 닭가슴살을 넣고 더 끓입니다."
    ],
    "sodiumTip": "간은 하지 않고 김치 대신 오이무침 같은 싱거운 반찬을 곁들이세요.",
    "caution": "혈당을 확인해야 하는 날에는 귀리 양을 1/4컵 이하로 유지하세요."
  },
  {
    "id": 28,
    "title": "현미소량 채소두부비빔",
    "category": "밥·도시락",
    "time": "15분",
    "method": "비빔",
    "tags": [
      "저염",
      "현미소량",
      "두부",
      "채소많이"
    ],
    "main": "밥을 완전히 끊기보다 소량으로 조절하는 균형식입니다.",
    "ingredients": [
      "현미밥 1/3공기",
      "두부 1/2모",
      "브로콜리",
      "양배추",
      "버섯",
      "들기름 1작은술"
    ],
    "steps": [
      "두부와 채소를 데치거나 찝니다.",
      "현미밥은 1/3공기만 담습니다.",
      "채소와 두부를 많이 올리고 들기름으로 비빕니다."
    ],
    "sodiumTip": "고추장 대신 들기름, 식초, 깨를 사용하세요.",
    "caution": "비빔밥은 고추장 한 숟갈로 나트륨과 당이 확 올라갑니다."
  },
  {
    "id": 29,
    "title": "미역 두부 맑은국",
    "category": "국·탕",
    "time": "18분",
    "method": "끓이기",
    "tags": [
      "저염",
      "해조류",
      "두부",
      "국물주의"
    ],
    "main": "미역국을 짜지 않게 끓이고 건더기 위주로 먹는 메뉴입니다.",
    "ingredients": [
      "불린 미역 1/2컵",
      "두부 1/2모",
      "무 조금",
      "마늘",
      "물 500ml"
    ],
    "steps": [
      "미역은 충분히 불리고 헹굽니다.",
      "무와 미역을 물에 끓입니다.",
      "두부를 넣고 한 번 더 끓입니다."
    ],
    "sodiumTip": "국간장 없이 끓이고, 국물은 반 이하로 드세요.",
    "caution": "갑상선 질환이 있으면 해조류 과다섭취는 주치의와 상의하세요."
  },
  {
    "id": 30,
    "title": "표고버섯 계란국",
    "category": "국·탕",
    "time": "12분",
    "method": "끓이기",
    "tags": [
      "저염",
      "계란",
      "버섯",
      "간단"
    ],
    "main": "바쁜 아침에 먹기 좋은 싱거운 단백질 국입니다.",
    "ingredients": [
      "계란 1개",
      "표고버섯 2개",
      "대파",
      "물 350ml",
      "후추"
    ],
    "steps": [
      "표고버섯을 얇게 썰어 물에 끓입니다.",
      "계란을 풀어 천천히 붓습니다.",
      "대파와 후추로 마무리합니다."
    ],
    "sodiumTip": "멸치육수나 다시다 없이 표고버섯 향으로 맛을 냅니다.",
    "caution": "계란국을 먹는 날은 다른 계란 섭취량을 함께 계산하세요."
  },
  {
    "id": 31,
    "title": "청경채 흰살생선찜",
    "category": "생선·해산물",
    "time": "20분",
    "method": "찜",
    "tags": [
      "저염",
      "흰살생선",
      "청경채",
      "찜"
    ],
    "main": "중식풍 생선찜을 간장 없이 만든 버전입니다.",
    "ingredients": [
      "대구살 또는 광어살 150g",
      "청경채 2포기",
      "생강 조금",
      "대파",
      "레몬즙"
    ],
    "steps": [
      "청경채를 반으로 자르고 찜 접시에 깝니다.",
      "생선을 올리고 생강과 대파를 얹습니다.",
      "12~15분 찐 뒤 레몬즙을 뿌립니다."
    ],
    "sodiumTip": "간장 소스를 붓지 않고 생강·대파·레몬으로 맛을 냅니다.",
    "caution": "생선은 중심까지 완전히 익혀 드세요."
  },
  {
    "id": 32,
    "title": "두부 아보카도 샐러드",
    "category": "채소반찬",
    "time": "10분",
    "method": "생채",
    "tags": [
      "저염",
      "두부",
      "좋은지방",
      "간단"
    ],
    "main": "들기름 외에 좋은 지방을 다양화하는 샐러드입니다.",
    "ingredients": [
      "두부 1/2모",
      "아보카도 1/3개",
      "방울토마토",
      "양상추",
      "레몬즙",
      "후추"
    ],
    "steps": [
      "두부는 끓는 물에 데쳐 식힙니다.",
      "아보카도와 토마토를 썹니다.",
      "채소 위에 두부와 아보카도를 올리고 레몬즙을 뿌립니다."
    ],
    "sodiumTip": "드레싱 없이 레몬즙과 후추로 먹습니다.",
    "caution": "아보카도는 열량이 높으니 1/3개 정도만 사용하세요."
  },
  {
    "id": 33,
    "title": "케일 두부 참깨무침",
    "category": "채소반찬",
    "time": "12분",
    "method": "데치기",
    "tags": [
      "저염",
      "잎채소",
      "두부",
      "식이섬유"
    ],
    "main": "케일을 부드럽게 데쳐 먹는 초록 반찬입니다.",
    "ingredients": [
      "케일 5장",
      "두부 1/3모",
      "깨 1큰술",
      "들기름 1작은술",
      "식초 약간"
    ],
    "steps": [
      "케일은 30초~1분 데쳐 찬물에 헹굽니다.",
      "두부는 데쳐 으깹니다.",
      "케일, 두부, 깨, 들기름, 식초를 넣고 무칩니다."
    ],
    "sodiumTip": "소금 없이 깨와 들기름의 고소함을 사용하세요.",
    "caution": "와파린 복용 중이면 케일 같은 비타민 K 많은 채소 섭취량을 일정하게 유지해야 합니다."
  },
  {
    "id": 34,
    "title": "숙주 닭가슴살 냉채",
    "category": "계란·닭",
    "time": "15분",
    "method": "데치기",
    "tags": [
      "저염",
      "닭가슴살",
      "숙주",
      "상큼"
    ],
    "main": "겨자소스를 짜지 않게 만들어 먹는 단백질 냉채입니다.",
    "ingredients": [
      "숙주 2줌",
      "삶은 닭가슴살 100g",
      "오이 1/3개",
      "식초 1큰술",
      "겨자 소량",
      "레몬즙"
    ],
    "steps": [
      "숙주는 살짝 데쳐 식힙니다.",
      "닭가슴살은 결대로 찢고 오이는 채 썹니다.",
      "식초, 겨자, 레몬즙을 섞어 버무립니다."
    ],
    "sodiumTip": "간장·소금 없이 식초와 겨자로 맛을 냅니다.",
    "caution": "겨자소스에 설탕을 많이 넣지 마세요."
  },
  {
    "id": 35,
    "title": "가지 토마토찜",
    "category": "채소반찬",
    "time": "20분",
    "method": "찜",
    "tags": [
      "저염",
      "토마토",
      "가지",
      "채소많이"
    ],
    "main": "소금 없이도 감칠맛이 나는 부드러운 채소찜입니다.",
    "ingredients": [
      "가지 1개",
      "토마토 1개",
      "양파 조금",
      "마늘",
      "올리브오일 1작은술"
    ],
    "steps": [
      "가지는 반달 모양으로 썹니다.",
      "토마토와 양파를 잘게 썰어 냄비에 깝니다.",
      "가지를 올리고 뚜껑을 덮어 약불에서 익힙니다."
    ],
    "sodiumTip": "소금 대신 토마토의 산미와 양파 단맛을 활용하세요.",
    "caution": "기름을 많이 먹는 가지 특성 때문에 오일은 1작은술만 사용하세요."
  },
  {
    "id": 36,
    "title": "파프리카 닭가슴살 물볶음",
    "category": "계란·닭",
    "time": "18분",
    "method": "물볶음",
    "tags": [
      "저염",
      "닭가슴살",
      "색채소",
      "도시락"
    ],
    "main": "팬에 기름을 많이 쓰지 않고 물로 익히는 닭채소 메뉴입니다.",
    "ingredients": [
      "닭가슴살 120g",
      "파프리카 1/2개",
      "양파",
      "브로콜리",
      "마늘",
      "후추"
    ],
    "steps": [
      "닭가슴살은 얇게 썰어 먼저 익힙니다.",
      "팬에 물 3큰술을 넣고 채소를 넣어 볶듯 익힙니다.",
      "후추로 마무리합니다."
    ],
    "sodiumTip": "굴소스·간장 대신 마늘과 후추를 사용하세요.",
    "caution": "닭은 속까지 완전히 익혀야 합니다."
  },
  {
    "id": 37,
    "title": "오이 미역 들기름무침",
    "category": "채소반찬",
    "time": "10분",
    "method": "무침",
    "tags": [
      "저염",
      "해조류",
      "오이",
      "들기름"
    ],
    "main": "새콤하게 먹는 저염 반찬입니다.",
    "ingredients": [
      "오이 1/2개",
      "불린 미역 1/2컵",
      "식초 1큰술",
      "들기름 1작은술",
      "깨"
    ],
    "steps": [
      "미역은 불려서 여러 번 헹굽니다.",
      "오이는 얇게 썹니다.",
      "식초, 들기름, 깨와 함께 무칩니다."
    ],
    "sodiumTip": "초고추장 대신 식초와 들기름을 사용하세요.",
    "caution": "시판 해초샐러드는 양념에 나트륨과 당이 많을 수 있습니다."
  },
  {
    "id": 38,
    "title": "콩나물 두부찜",
    "category": "콩·발효",
    "time": "15분",
    "method": "찜",
    "tags": [
      "저염",
      "콩류",
      "두부",
      "간단"
    ],
    "main": "콩나물과 두부로 가볍게 먹는 저염 단백질 반찬입니다.",
    "ingredients": [
      "콩나물 2줌",
      "두부 1/2모",
      "대파",
      "마늘",
      "고춧가루 아주 소량"
    ],
    "steps": [
      "냄비에 콩나물과 물 4큰술을 넣고 익힙니다.",
      "두부를 올려 함께 데웁니다.",
      "대파와 마늘, 고춧가루를 아주 소량 넣습니다."
    ],
    "sodiumTip": "간장양념을 따로 만들지 않는 것이 포인트입니다.",
    "caution": "콩나물은 충분히 익혀 비린내를 줄이세요."
  },
  {
    "id": 39,
    "title": "배추 된장맑은국",
    "category": "국·탕",
    "time": "18분",
    "method": "끓이기",
    "tags": [
      "저염",
      "배추",
      "된장소량",
      "국물주의"
    ],
    "main": "된장국을 먹고 싶을 때 장을 적게 쓰고 배추를 많이 넣는 버전입니다.",
    "ingredients": [
      "배추 3장",
      "두부 1/3모",
      "버섯",
      "된장 1작은술",
      "물 500ml"
    ],
    "steps": [
      "배추와 버섯을 먼저 물에 끓입니다.",
      "된장은 1작은술만 풀어 향을 냅니다.",
      "두부를 넣고 한 번 더 끓입니다."
    ],
    "sodiumTip": "된장을 적게 쓰고 건더기 위주로 드세요.",
    "caution": "된장국에 김치·젓갈·장아찌를 같이 먹으면 하루 나트륨이 크게 늘 수 있습니다."
  },
  {
    "id": 40,
    "title": "갈치 애호박찜",
    "category": "생선·해산물",
    "time": "25분",
    "method": "찜",
    "tags": [
      "저염",
      "생선",
      "애호박",
      "구이대체"
    ],
    "main": "갈치를 굽지 않고 애호박과 함께 찌는 메뉴입니다.",
    "ingredients": [
      "갈치 1토막",
      "애호박 1/3개",
      "양파",
      "대파",
      "마늘",
      "후추"
    ],
    "steps": [
      "애호박과 양파를 냄비 바닥에 깝니다.",
      "갈치를 올리고 물 4큰술을 넣습니다.",
      "뚜껑을 덮어 완전히 익힙니다."
    ],
    "sodiumTip": "갈치 자체 염분이 있을 수 있으니 추가 간은 하지 마세요.",
    "caution": "염장 갈치는 피하고 생물 또는 저염 제품을 고르세요."
  },
  {
    "id": 41,
    "title": "바지락 순두부 맑은탕",
    "category": "국·탕",
    "time": "20분",
    "method": "끓이기",
    "tags": [
      "저염",
      "순두부",
      "해산물",
      "국물주의"
    ],
    "main": "순두부찌개를 맵고 짜게 먹지 않는 맑은 버전입니다.",
    "ingredients": [
      "순두부 1팩",
      "해감 바지락 한 줌",
      "애호박",
      "대파",
      "마늘",
      "물 500ml"
    ],
    "steps": [
      "바지락은 해감 후 깨끗이 씻습니다.",
      "물에 바지락과 애호박을 넣고 끓입니다.",
      "순두부를 넣고 완전히 끓인 뒤 대파를 넣습니다."
    ],
    "sodiumTip": "바지락 자체의 짠맛이 있어 소금을 넣지 않아도 됩니다.",
    "caution": "조개류는 반드시 완전히 익혀 드세요."
  },
  {
    "id": 42,
    "title": "토마토 계란 부드러운 볶음",
    "category": "계란·닭",
    "time": "12분",
    "method": "약불조리",
    "tags": [
      "저염",
      "토마토",
      "계란",
      "간단"
    ],
    "main": "중국식 토마토계란볶음을 기름과 소금 없이 부드럽게 만든 메뉴입니다.",
    "ingredients": [
      "계란 1개",
      "토마토 1개",
      "양파 조금",
      "올리브오일 1작은술",
      "후추"
    ],
    "steps": [
      "토마토와 양파를 약불에서 부드럽게 익힙니다.",
      "계란을 풀어 넣고 천천히 저어 익힙니다.",
      "후추로 마무리합니다."
    ],
    "sodiumTip": "케첩은 당과 나트륨이 있어 넣지 마세요.",
    "caution": "기름을 많이 두르지 않고 약불에서 촉촉하게 익히세요."
  },
  {
    "id": 43,
    "title": "브로콜리 두부깨소스",
    "category": "채소반찬",
    "time": "15분",
    "method": "데치기",
    "tags": [
      "저염",
      "십자화과",
      "두부소스",
      "고소함"
    ],
    "main": "마요네즈 대신 두부와 깨로 소스를 만드는 브로콜리 메뉴입니다.",
    "ingredients": [
      "브로콜리 1송이",
      "연두부 1/2팩",
      "깨 1큰술",
      "식초 1작은술",
      "레몬즙"
    ],
    "steps": [
      "브로콜리를 데쳐 식힙니다.",
      "연두부, 깨, 식초, 레몬즙을 으깨 소스를 만듭니다.",
      "브로콜리에 소스를 곁들입니다."
    ],
    "sodiumTip": "깨소스에 간장이나 마요네즈를 넣지 않습니다.",
    "caution": "소스가 심심해도 식재료 본연의 맛에 익숙해지는 것이 목표입니다."
  },
  {
    "id": 44,
    "title": "콜리플라워라이스 생선덮밥",
    "category": "밥·도시락",
    "time": "20분",
    "method": "찜",
    "tags": [
      "밥대체",
      "저염",
      "생선",
      "십자화과"
    ],
    "main": "밥 양을 줄이고 싶은 날 먹는 생선 덮밥 대체식입니다.",
    "ingredients": [
      "콜리플라워 잘게 다진 것 1.5컵",
      "흰살생선 120g",
      "브로콜리",
      "버섯",
      "레몬즙"
    ],
    "steps": [
      "콜리플라워를 잘게 다져 팬에 물 2큰술과 함께 익힙니다.",
      "생선과 버섯은 찜기에 익힙니다.",
      "콜리플라워라이스 위에 생선과 채소를 올립니다."
    ],
    "sodiumTip": "덮밥소스 대신 레몬즙과 후추로 마무리하세요.",
    "caution": "생선은 굽지 말고 찌거나 삶는 방식이 더 좋습니다."
  },
  {
    "id": 45,
    "title": "닭가슴살 무양배추스프",
    "category": "계란·닭",
    "time": "30분",
    "method": "끓이기",
    "tags": [
      "저염",
      "닭가슴살",
      "양배추",
      "포만감"
    ],
    "main": "저녁을 가볍게 먹고 싶을 때 좋은 단백질 스프입니다.",
    "ingredients": [
      "닭가슴살 120g",
      "무 1토막",
      "양배추 2줌",
      "토마토 1/2개 선택",
      "대파",
      "마늘"
    ],
    "steps": [
      "닭가슴살은 한 번 데쳐 냄새를 줄입니다.",
      "무와 양배추를 충분히 끓입니다.",
      "닭가슴살을 찢어 넣고 한 번 더 끓입니다."
    ],
    "sodiumTip": "국물은 싱겁게 만들고 건더기 위주로 먹습니다.",
    "caution": "저녁 단식이 힘든 날 과식 방지용으로 사용하세요."
  },
  {
    "id": 46,
    "title": "대파버섯 계란찜",
    "category": "계란·닭",
    "time": "15분",
    "method": "찜",
    "tags": [
      "저염",
      "계란",
      "버섯",
      "부드러운식"
    ],
    "main": "계란찜에 버섯을 넣어 감칠맛을 높인 메뉴입니다.",
    "ingredients": [
      "계란 1개",
      "표고버섯 1개",
      "대파",
      "물 120ml",
      "후추"
    ],
    "steps": [
      "계란과 물을 잘 섞습니다.",
      "잘게 썬 버섯과 대파를 넣습니다.",
      "약불에서 부드럽게 찝니다."
    ],
    "sodiumTip": "새우젓을 넣지 않는 계란찜입니다.",
    "caution": "식당 계란찜은 새우젓·소금이 들어가 짤 수 있습니다."
  },
  {
    "id": 47,
    "title": "청국장 낫또 냉비빔두부",
    "category": "콩·발효",
    "time": "8분",
    "method": "비빔",
    "tags": [
      "저염",
      "콩발효",
      "두부",
      "간단"
    ],
    "main": "청국장과 낫또를 과하게 짜지 않게 소량만 활용하는 냉두부 메뉴입니다.",
    "ingredients": [
      "두부 1/2모",
      "낫또 1/2팩",
      "청국장 1작은술",
      "오이",
      "들기름 1작은술",
      "깨"
    ],
    "steps": [
      "두부는 데쳐서 식힙니다.",
      "낫또와 청국장 소량을 섞습니다.",
      "두부 위에 오이, 낫또청국장, 들기름, 깨를 올립니다."
    ],
    "sodiumTip": "청국장과 낫또 양념을 많이 쓰지 않고 향만 사용합니다.",
    "caution": "콩발효식품이 좋은 음식이어도 짜게 먹으면 감점입니다."
  },
  {
    "id": 48,
    "title": "미나리 문어 레몬무침",
    "category": "생선·해산물",
    "time": "12분",
    "method": "무침",
    "tags": [
      "저염",
      "문어",
      "미나리",
      "상큼"
    ],
    "main": "초장 없이 문어를 상큼하게 먹는 메뉴입니다.",
    "ingredients": [
      "삶은 문어 100g",
      "미나리 한 줌",
      "오이",
      "레몬즙 1큰술",
      "올리브오일 1작은술",
      "후추"
    ],
    "steps": [
      "문어는 얇게 썰고 미나리는 짧게 자릅니다.",
      "오이를 채 썹니다.",
      "레몬즙과 올리브오일로 가볍게 무칩니다."
    ],
    "sodiumTip": "초고추장 대신 레몬즙으로 맛을 냅니다.",
    "caution": "문어는 반드시 충분히 익힌 것을 사용하세요."
  },
  {
    "id": 49,
    "title": "굴미역 완전익힘국",
    "category": "국·탕",
    "time": "20분",
    "method": "끓이기",
    "tags": [
      "저염",
      "해산물",
      "해조류",
      "국물주의"
    ],
    "main": "굴을 먹을 때는 완전히 익혀 먹는 안전형 메뉴입니다.",
    "ingredients": [
      "굴 80g",
      "불린 미역 1/2컵",
      "두부 1/3모",
      "마늘",
      "물 500ml"
    ],
    "steps": [
      "굴은 깨끗이 씻고 미역은 충분히 헹굽니다.",
      "미역과 물을 끓이다가 굴을 넣습니다.",
      "굴이 완전히 익으면 두부를 넣고 더 끓입니다."
    ],
    "sodiumTip": "굴 자체의 짠맛이 있어 소금은 넣지 않습니다.",
    "caution": "생굴은 피하고 반드시 완전히 익혀 드세요."
  },
  {
    "id": 50,
    "title": "주말 보양 대구지리 정식",
    "category": "국·탕",
    "time": "30분",
    "method": "끓이기",
    "tags": [
      "저염",
      "주말식",
      "생선",
      "국물주의"
    ],
    "main": "복어지리나 동태탕을 좋아할 때 대체하기 좋은 주말 식단입니다.",
    "ingredients": [
      "대구 150g",
      "무",
      "배추",
      "미나리",
      "두부 1/3모",
      "브로콜리 반찬",
      "현미밥 1/3공기 선택"
    ],
    "steps": [
      "무와 배추를 넣어 맑은 국물을 만듭니다.",
      "대구와 두부를 넣고 완전히 익힙니다.",
      "미나리를 마지막에 넣고 브로콜리 반찬과 함께 먹습니다."
    ],
    "sodiumTip": "국물은 1/3 이하, 밥은 1/3공기 이하로 조절하세요.",
    "caution": "보양식도 과식하면 체중관리에는 불리합니다."
  }
];

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const state = {
  query: '',
  category: '전체',
  tag: '전체',
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  plan: JSON.parse(localStorage.getItem('weeklyPlan') || '[]'),
};

const categories = ['전체', ...new Set(RECIPES.map(r => r.category))];
const tags = ['전체', ...new Set(RECIPES.flatMap(r => r.tags))];

function save() {
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
  localStorage.setItem('weeklyPlan', JSON.stringify(state.plan));
}

function scoreRecipe(r) {
  let score = 80;
  if (r.tags.includes('저염')) score += 7;
  if (r.tags.includes('십자화과')) score += 4;
  if (r.tags.includes('콩류') || r.tags.includes('콩발효')) score += 3;
  if (r.tags.includes('국물주의')) score -= 2;
  if (r.tags.includes('면적게') || r.tags.includes('면대체')) score += 2;
  return Math.min(score, 96);
}

function init() {
  $('#year').textContent = new Date().getFullYear();
  renderFilterButtons('#categoryFilters', categories, 'category');
  renderFilterButtons('#tagFilters', tags, 'tag');
  $('#search').addEventListener('input', e => { state.query = e.target.value.trim(); renderRecipes(); });
  $('#clearFilters').addEventListener('click', () => { state.query=''; state.category='전체'; state.tag='전체'; $('#search').value=''; initFilterActive(); renderRecipes(); });
  $('#randomBtn').addEventListener('click', showTodayPick);
  $('#planBtn').addEventListener('click', generatePlan);
  $('#clearPlanBtn').addEventListener('click', () => { state.plan = []; save(); renderPlan(); });
  $('#printBtn').addEventListener('click', () => window.print());
  $('#closeModal').addEventListener('click', closeModal);
  $('#modalBackdrop').addEventListener('click', closeModal);
  initFilterActive();
  renderStats();
  renderRecipes();
  renderPlan();
  showTodayPick(false);
}

function renderFilterButtons(root, items, key) {
  const el = $(root);
  el.innerHTML = items.map(item => `<button class="chip" data-key="${key}" data-value="${item}">${item}</button>`).join('');
  el.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn) return;
    state[key] = btn.dataset.value;
    initFilterActive();
    renderRecipes();
  });
}

function initFilterActive() {
  $$('.chip').forEach(btn => {
    const key = btn.dataset.key;
    btn.classList.toggle('active', state[key] === btn.dataset.value);
  });
}

function filterRecipes() {
  const q = state.query.toLowerCase();
  return RECIPES.filter(r => {
    const hay = [r.title, r.category, r.method, r.main, ...r.tags, ...r.ingredients].join(' ').toLowerCase();
    return (!q || hay.includes(q)) &&
      (state.category === '전체' || r.category === state.category) &&
      (state.tag === '전체' || r.tags.includes(state.tag));
  });
}

function renderStats() {
  $('#totalCount').textContent = RECIPES.length;
  $('#lowSaltCount').textContent = RECIPES.filter(r => r.tags.includes('저염')).length;
  $('#soupCount').textContent = RECIPES.filter(r => r.tags.includes('국물주의')).length;
  $('#plantCount').textContent = RECIPES.filter(r => r.tags.includes('십자화과') || r.tags.includes('콩류') || r.tags.includes('콩발효')).length;
}

function renderRecipes() {
  const list = filterRecipes();
  $('#resultCount').textContent = `${list.length}개 레시피`;
  $('#recipeGrid').innerHTML = list.map(cardHtml).join('');
  $$('#recipeGrid .card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.fav')) return;
      openRecipe(Number(card.dataset.id));
    });
  });
  $$('#recipeGrid .fav').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    toggleFavorite(Number(btn.dataset.id));
  }));
}

function cardHtml(r) {
  const fav = state.favorites.includes(r.id);
  return `
    <article class="card" data-id="${r.id}">
      <div class="cardTop">
        <span class="badge">${r.category}</span>
        <button class="fav ${fav ? 'on' : ''}" data-id="${r.id}" title="즐겨찾기">${fav ? '★' : '☆'}</button>
      </div>
      <h3>${r.title}</h3>
      <p>${r.main}</p>
      <div class="meta"><span>⏱ ${r.time}</span><span>🍳 ${r.method}</span><span>점수 ${scoreRecipe(r)}</span></div>
      <div class="tags">${r.tags.slice(0,4).map(t => `<span>${t}</span>`).join('')}</div>
    </article>`;
}

function toggleFavorite(id) {
  if (state.favorites.includes(id)) state.favorites = state.favorites.filter(x => x !== id);
  else state.favorites.push(id);
  save();
  renderRecipes();
}

function openRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;
  $('#modalTitle').textContent = r.title;
  $('#modalBody').innerHTML = `
    <div class="modalMeta">
      <span>${r.category}</span><span>${r.time}</span><span>${r.method}</span><span>식단점수 ${scoreRecipe(r)}</span>
    </div>
    <p class="lead">${r.main}</p>
    <h4>재료</h4>
    <ul>${r.ingredients.map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>만드는 법</h4>
    <ol>${r.steps.map(x => `<li>${x}</li>`).join('')}</ol>
    <div class="tip"><strong>저염 포인트</strong><br>${r.sodiumTip}</div>
    <div class="warn"><strong>주의</strong><br>${r.caution}</div>
    <div class="tags modalTags">${r.tags.map(t => `<span>${t}</span>`).join('')}</div>
  `;
  $('#modal').classList.add('show');
  $('#modalBackdrop').classList.add('show');
}

function closeModal() {
  $('#modal').classList.remove('show');
  $('#modalBackdrop').classList.remove('show');
}

function showTodayPick(scroll=true) {
  const pool = filterRecipes().length ? filterRecipes() : RECIPES;
  const sorted = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  $('#todayPick').innerHTML = sorted.map(r => `
    <button class="pick" data-id="${r.id}">
      <strong>${r.title}</strong><br><small>${r.category} · ${r.time} · ${r.tags.slice(0,2).join(', ')}</small>
    </button>`).join('');
  $$('#todayPick .pick').forEach(b => b.addEventListener('click', () => openRecipe(Number(b.dataset.id))));
  if (scroll) $('#today').scrollIntoView({behavior:'smooth', block:'start'});
}

function generatePlan() {
  const breakfast = RECIPES.filter(r => r.category === '아침');
  const soups = RECIPES.filter(r => r.category === '국·탕');
  const proteins = RECIPES.filter(r => ['생선·해산물','계란·닭','콩·발효'].includes(r.category));
  const sides = RECIPES.filter(r => r.category === '채소반찬');
  const special = RECIPES.filter(r => ['면·별미','밥·도시락'].includes(r.category));
  const days = ['월','화','수','목','금','토','일'];
  function pick(arr, used) {
    const candidates = arr.filter(x => !used.has(x.id));
    const pool = candidates.length ? candidates : arr;
    const item = pool[Math.floor(Math.random()*pool.length)];
    used.add(item.id);
    return item.id;
  }
  const used = new Set();
  state.plan = days.map((d, idx) => {
    const dinnerPool = idx === 5 ? special : proteins;
    return {
      day: d,
      breakfast: pick(breakfast.length ? breakfast : RECIPES, used),
      lunch: pick(idx % 3 === 0 ? soups : proteins, used),
      dinner: pick(dinnerPool, used),
      side: pick(sides, used)
    };
  });
  save();
  renderPlan();
  $('#plan').scrollIntoView({behavior:'smooth', block:'start'});
}

function renderPlan() {
  if (!state.plan.length) {
    $('#planTable').innerHTML = '<div class="empty">아직 식단표가 없습니다. “7일 식단 자동생성”을 눌러주세요.</div>';
    $('#shoppingList').innerHTML = '';
    return;
  }
  const get = id => RECIPES.find(r => r.id === id);
  $('#planTable').innerHTML = `
    <div class="planGrid">
      ${state.plan.map(row => `
        <div class="planDay">
          <h3>${row.day}</h3>
          <p><b>아침</b> <button data-id="${row.breakfast}">${get(row.breakfast).title}</button></p>
          <p><b>점심</b> <button data-id="${row.lunch}">${get(row.lunch).title}</button></p>
          <p><b>저녁</b> <button data-id="${row.dinner}">${get(row.dinner).title}</button></p>
          <p><b>반찬</b> <button data-id="${row.side}">${get(row.side).title}</button></p>
        </div>`).join('')}
    </div>`;
  $$('#planTable button').forEach(b => b.addEventListener('click', () => openRecipe(Number(b.dataset.id))));
  const ids = state.plan.flatMap(r => [r.breakfast, r.lunch, r.dinner, r.side]);
  const items = [...new Set(ids.flatMap(id => get(id).ingredients.map(x => x.replace(/\s*선택/g,'').trim())))].slice(0, 45);
  $('#shoppingList').innerHTML = `<h3>이번 주 장보기 메모</h3><div class="shopping">${items.map(i => `<span>${i}</span>`).join('')}</div>`;
}

window.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
window.addEventListener('load', init);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}
