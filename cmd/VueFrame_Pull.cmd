set PATH=%PATH%;C:\Program Files (x86)\Git\cmd\
echo %~dp0
%~d0
cd %~dp0\VueFramework
rd /s /q "..\BuildArtifacts\VueFramework\master\"
git config credential.helper store

git clean -d -fx ""
git checkout master
git pull

