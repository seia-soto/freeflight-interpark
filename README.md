# FreeFlight — 인터파크

성공적인 인터파크 티켓팅을 위한 무료 확장 프로그램으로 FreeFlight는 티켓팅 매크로들과 손으로 싸울 때 많은 실수를 줄여줄 수 있습니다.

## 설치 및 사용 방법

FreeFlight는 Chrome 및 Chromium 기반 브라우저인 Edge에서 작동하도록 설계되었습니다.
Mozilla Firefox나 Apple Safari, Naver Whale 지원은 추후에도 추가되지 않을 예정이니 해당 브라우저에서 발생하는 오류는 제보하지 말아주세요.

1. Chrome 브라우저를 열고 `chrome://extensions`에서 우측 상단의 버튼을 통해 개발자 모드를 활성화합니다.
2. 릴리즈 페이지에서 파일명이 zip으로 끝나는 확장 프로그램을 다운로드받고 압축을 풀어 창에 드래그하여 설치합니다.

확장 프로그램 설정은 마지막 변경 후 0.4초가 지나면 자동으로 저장됩니다.

## 기능

### 계정

**로그인되어 있지 않으면 로그인 페이지로 이동**

인터파크 티켓팅 사이트에 접속할 때 로그인 여부를 자동으로 확인하여 실제 티켓팅 전 로그인을 유지할 수 있도록 합니다.

### 티켓팅

**티켓팅 기능 활성화**

아래 티켓팅 기능을 전부 활성화하려면 이 체크박스를 활성화하여야 합니다.

**보안문자 입력칸 자동 선택 및 한/영 자동 전환**

> 실제 입력기의 한/영이 전환되지 않으니 이후 입력 시에는 한글로 입력될 수 있습니다.

첫 티켓팅 창을 열 때 보안문자 입력칸을 자동으로 클릭하여 바로 입력할 수 있는 상태로 만듭니다.
이후 한/영 전환의 여부와 상관없이 한글 문자를 키보드의 동일한 영어 문자로 치환해줍니다.

**좌석 유형 선택 시 다음 단어를 포함한 유형 자동 선택**

좌석 유형을 선택할 때 입력칸이 쓰여진 단어를 포함한 좌석 유형을 자동으로 선택합니다.
선택 후 즉시 좌석 선택 페이지로 이동합니다.

기본적으로 입력된 좌석 유형을 찾지 못하면 자동으로 `일반`이 포함된 좌석 유형을 탐색합니다.
`일반`이 포함된 좌석 유형을 찾지 못하면 첫 번째 좌석 유형을 자동으로 탐색하여 클릭 후 좌석 선택 페이지로 이동합니다.

## FAQ

**FreeFlight는 유료인가요?**

FreeFlight은 계속해서 무료이며 티켓팅 시 사람의 실수를 줄이는데에만 집중합니다.
코드는 MIT 라이선스로 배포됩니다.

**작동이 되지 않는데 어떡해야 하나요?**

FreeFlight은 실시간으로 인터파크에 대응해서 업데이트되는 프로그램이 아닙니다.
작동 여부를 꼭 실제 티켓팅 전에 확인하십시오.

또 자동 업데이트는 지원되지 않습니다.

**티켓팅에 실패했는데 어떡해야 하나요?**

FreeFlight은 빠르게 티켓팅 좌석 선택에 들어갈 수 있도록 실수를 바로 잡아주지만 티켓팅 성공 여부를 보장하지 않습니다.

**사용하면 서버 부하가 늘어나나요?**

FreeFlight은 여러분이 클릭하고 입력하는 것들 중 정해진 것을 대신하는 브라우저 확장프로그램입니다.
따로 서버에 외부 요청을 보내지 않고 개개인의 트래픽 외 추가 트래픽을 유발하지 않습니다.
