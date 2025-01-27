# Quest 00. 형상관리 시스템 
## Checklist
* 형상관리 시스템은 왜 나오게 되었을까요?  
  - 소프트웨어의 변경사항을 체계적으로 추적, 통제, 관리하기 위해서.
<br>

* git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
  - git은 `VCS(Version Control System)` 방식을 사용하고 있는 시스템입니다.
  - VCS란 : `파일의 변화를 시간에 따라 기록` 했다가, 특정 시점의 버전을 확인하도록 하여 `파일을 이전 상태`로 되돌릴 수 있고, 프로젝트를 통째로 `이전 상태로 되돌릴 수 있고`, 시간에 따라 `수정 내용을 비교` 해 볼 수 있고, `누가 문제를 일으켰는지` 도 추적할 수 있고, `누가 언제 만들어낸 이슈` 인지도 알 수 있다. 또는 파일을 잃어버리거나 잘못 고쳤을 때도 `쉽게 복구` 할 수 있다.
  - `분산형 형상관리 시스템이란 : 로컬에 파일의 변경 정보(스냅샷)만을 저장하는것이 아니라, 저장소를 포함한 모든 데이터를 가지는 시스템을 말한다.
<br>

* git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
  - Linux를 개발하던 `Linus Torvalds`가 BitKeeper라는 상용 DVCS의 무료 사용이 재고되면서 Git을 개발하게 되었습니다.
  - Linus Torvalds는 다음과 같은 목표를 구성하고 Git을 설계 및 제작하였습니다.
    - 빠른 속도
    - 단순한 구조
    - 비선형적인 개발(수천 개의 동시 다발적인 브랜치)
    - 완벽한 분산
    - Linux 커널 같은 대형 프로젝트에도 유용할 것(속도나 데이터 크기 면에서)
<br>

* git과 GitHub은 어떻게 다를까요?
  - git은 버전 컨트롤 시스템이고, GitHub는 git을 활용하여 함께 일하거나 프로젝트를 진행하는 경우, version control과 협업을 지원하는 `Hosting Platform` 입니다.
  - GitHub를 활용함으로써 브랜치를 생성하고, issue, pull request, commit 등의 활동을 보조하여 코드를 생성하거나 리뷰하는 등의 활동을 통해 생산성을 얻을 수 있습니다
<br>

* git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요? 그리고 어떻게 사용하나요?
  - **clone** : 기존에 존재하는 repository를 복사하는 명령어입니다. 
    - 보통 remote repository를 local에 복사하여 작업하기 위한 환경을 구성하는데 사용합니다
    - `git clone <repository (url 또는 경로)>` 의 형태로 사용하며 local 저장소를 복사하거나, origin의 이름을 지정하거나 하는 등의 추가 옵션들을 사용할 수 있습니다
  - **add** : 새 파일 또는 수정된 파일을 지정하여 git이 tracking 하도록 설정하는 명령어 입니다.
    - 최종적으로는 수정 또는 생성된 파일을 git의 staging 영역에 등록하기 위해 사용합니다.
    - `git add <pathspec>` 의 형태로 사용하며 파일 이름 또는 규칙을 지정할 수 있고, 파일들을 전부 추가하거나, 제거하는 등의 추가 옵션을 사용할 수 있습니다.
  - **commit** : Staging 영역에 있는 데이터의 스냅샷을 생성하고, 그 변경사항을 현재 branch에 기록합니다. 새로운 commit이 생성되고, 현재 작업중인 branch의 끝 부분에 추가되며 현재 HEAD가 새롭게 생성된 commit을 가리키게 됩니다.
    - Staging 영역에 있는 데이터의 스냅샷에 대한 포인터, 저자나 커밋 메시지 같은 메타데이터, 이전 커밋에 대한 포인터 등을 포함하는 커밋 개체(커밋 Object)를 저장합니다.
    - `git commit <options>` 의 형태로 사용하며 다른 commit의 log를 참조, 참조수정, 신규 log를 생성 
  - **push** : local repository의 내용을 remote repository에 반영하여 업데이트 하는 명령어 입니다.
    - `git push <repository> <branch>` 등의 형태로 사용하며, force push, repository 미명시시 default값(origin) 저장소로 자동 적용, 부가적인 옵션을 지정하지 않을시 default push (-all, --tags, -mirror) 옵션이 적용됩니다.
  - **pull** : 다른 repository로부터 데이터를 받아와 현재 local branch와 통합합니다.
  - **branch** : branch를 생성, 조회, 삭제할 수 있는 명령어 입니다.
    - `git branch <branchname>` 등의 형태로 사용하며, 원격 branch로 track, copy, force delete 등의 옵션을 사용할 수 있습니다.
  - **stash** : 작업 내용을 commit하지 않고, tracked이면서, modified 상태 파일의 변경 내용을 임시적으로 저장하고 싶을때 사용하는 명령어 입니다. 현재 작업 내용을 commit으로 기록하지 않고, 잠시 다른 branch의 작업을 이어가야 하는 등의 상황에 유용합니다. 
    - `git stash <option>` 등의 형태로 사용하며, 현재 stash 목록을 확인하거나, 생성, 불러오기, 삭제 등의 옵션을 사용할 수 있습니다. 
<br>

* git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
  - **Object** : 
    - init 명령으로 저장소를 초기화할 때 objects 디렉토리를 생성한다 `/.git/objects`
    - 실제로는 디렉토리 구조로, key-value 쌍의 형태로 구성되어 있다.
    - 모든것을 Tree와 Blob 객체로 저장한다
    - 주요 객체로는 Blob, Tree, Commit 객체가 있다
    - **Tree** : 파일 이름을 저장하는 객체, 하위에 Blob 객체 또는 Tree 객체를 여러개 저장할 수 있다. `SHA-1 포인터`, `파일 모드`, `개체 타입`, `파일 이름` 항목들을 저장한다
  - **Commit** : 어떤 스냅샷을 누가, 언제, 왜(Message) 저장했는지 정보를 갖는 객체. 부모 commit과, 자식 commit이 존재한다면, 무엇인지 기억한다
    - 지정한 스냅샷의 최상단 Tree를 가리킨다(Hash 값)
    - 형식은 다음과 같다
    ```bash
    tree <Tree Hash Value>
    author <user.name> <user.email> <time>
    committer <user.name> <user.email> <time>

    <Commit Message>
    ```
    - **(미해결)** `bak` 포인터가 왜 매 commit마다 존재하지 않고, 최상단에만 존재하는가?
  - **Head** : 현재 작업중인 branch를 가리키는 pointer이다.
  - **Branch** : 특정 commit을 가리키는 pointer 이다.
    -  어떤 한 커밋을 가리키는 40글자의 SHA-1 체크섬 파일에 불과하다!
    - 해당 branch에서 새 commit을 생성할 경우, 자동으로 방금 생성한 (가장 마지막) commit을 가리킨다.
  - **Tag**
    - `Lightweight` 태그와 `Annotated` 태그로 두 종류가 있다.
    - `LightWeight` 태그는 단순히 특정 Commit을 가리키는 pointer 이며, 해당 tag의 이름만 저장한다.
    - `Annotated` 태그는 이에 추가적으로 태그를 생성한 사람의 이름, 만든 날짜, 메시지 등을 저장한다
    - local에서 remote 저장소에 `git push`를 실행하여도 tag는 반영되지 않는다. 원한다면 `git push origin <태그 이름>`을 명령해야한다.
  - **History**
    1. blob 객체로 파일의 내용을 관리한다
    2. tree 객체로 blob과 하위 tree를 관리한다
    3. 스냅샷을 생성할 때, tree 객체를 새로 생성하고, index에 등록한 blob 객체들을 tree에 등록한다. 만약 이전에 index tree가 존재했다면, 이를 하위 tree에 등록한다
    4. 해당 tree를 가리키는 commit 객체를 생성한다. 이전 commit이 존재한다면, 이 commit은 이전 commit을 참조한다. 즉, 하위 tree의 내용을 참조한다
<br>

* 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
  - force push를 통해 원하는 History를 반영한다 **(위험)**
  - 문제를 수정한 commit을 작성한 뒤, push 한다.
    - 수정하고 새 commit을 작성하거나
    - `git revert`를 사용하여 이전 혹은 지정 범위의 commit을 취소하는 내용을 담은 commit을 생성한다.
<br>

## Advanced
* Mercurial은 어떤 형상관리 시스템일까요? 어떤 장점이 있을까요?
  - 상대적으로, 러닝커브를 줄일 수 있다.
  - git과는 다르게, 파일의 변경 내용만을 저장하여 크기가 적다 (단, 변경 이력이 쌓일수록 병합하는  비용이 증가한다)
  - 확장 명령 번들이 다양하다.
* 실리콘밸리의 테크 대기업들은 어떤 형상관리 시스템을 쓰고 있을까요?
  - git : Netflix, Reddit, Lyft, Robinhood ...etc
  - subversion : linkedin, facebook, newegg ...etc
  - mercurial : bitbucket, AO.com ...etc

## 참고 문서
- [Version Control](https://en.wikipedia.org/wiki/Version_control) by wikipedia
- [Git Documentation Reference](https://git-scm.com/docs)
- [Git Documentation Book](https://git-scm.com/book/ko/v2)
- [GitHub Guides - What is GitHub?](https://guides.github.com/activities/hello-world)
- [Git vs Mercurial](https://d2.naver.com/helloworld/1011)