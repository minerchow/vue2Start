set PATH=%PATH%;C:\Program Files (x86)\Git\cmd\
echo %~dp0
%~d0
cd %~dp0\h5-fe

git config credential.helper store

git clean -d -fx ""
git checkout develop
git pull

