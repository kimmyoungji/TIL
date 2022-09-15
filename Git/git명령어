# Git 명령어

## 용어들
1. merge: 상위 프로젝트로 하위 프로젝트 내용을 합치는 것
2. pull: 상위 프로젝트가 하위 플젝트 내용을 가져와서 자신과 합치는 것
3. fetch: 하위 프로젝트가 상위 프로젝트의 내용을 가져와서 합치기 전에, 미리 무엇이 다른지 확인하는 작업
4. push: 하위 프로젝트가 자신의 내용을 상위 프로젝트에 합치는 것
5. reabse: 브랜치를 단순히 상위 프로젝트에 합칠 뿐만 아니라, 아예, 상위 프로젝트 흐름의 한 단계로 축약시켜주는 작업
6. cherry pick: 한 브랜치에서 여러번 커밋이 발생한 뒤, 가장 최신 커밋이 아닌 그 이전의 커밋 중 하나를 선택하여 머지하는 것

## 명령어들
### clone
``` git clone <원격저장소 URl>```
### pull
```
git init
git remote add origin <URL>
git pull origin master  //git pull <원격저장소별칭> <받아오고자 하는 브랜치명>
```
### branch 만들기 
- 로컬의 메인브랜치에서 로컬 브랜치를 하나 파고, 원격 브랜치와 연결하는 방법
- 원격 메인브랜치에서 원격 브랜치를 하나 파고, 로컬 브랜치와 연결하는 방법도 같다. 
```
git init
git remote add origin <URL>
git pull origin master  //git pull <원격저장소별칭> <받아오고자 하는 브랜치명>
// 현재 메인 브랜치에 있다
git checkout -b branch1
git push --set-upstream origin branch1 //git push --set-upstream <원격저장소별칭> <브랜치명> 원격저장소에 원격브랜치 파주고 연결
```


