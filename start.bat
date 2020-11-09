@ECHO OFF
echo --- Installing / Verifying Packages ---
call npm i
echo --- Starting Bot ---
call node index
pause>nul