import {Base64} from "js-base64";

function getS(data) {
  return Base64.encodeURI(JSON.stringify(data));
}

export function getTag(
  version = 0,
  userId = '',
  groupId = '',
  returnUrlHelper,
  session = 1,
  pre = 0,
  pretotal = 0,
  prepost = 0,
  preposttotal = 0,
  exclude = 0,
) {

  const returnId = returnUrlHelper?.getReturnData().id;
  const parameter = returnUrlHelper?.getReturnData().parameter;



  return e(getS([userId, version, groupId, session, returnId, parameter, pre, pretotal, prepost, preposttotal, exclude]));
}

function objectToArray(dataObj) {

}
export function getDataFromTag(tag) {
  const json = Base64.decode(d(tag));
  const [userId, version, groupId, session, returnId, parameter, pre, pretotal, prepost, preposttotal, exclude] = JSON.parse(json);
  return {version, userId, groupId, session, returnId, parameter, pre, pretotal, prepost, preposttotal, exclude}
}

export function addToTag(groupId, tag) {//Nur bis EBL04
  const data = getDataFromTag(tag);
  data.groupId = +groupId;
  return e(getS(data));
}

export function addGroupidToTag(groupId, tag) {
  const data = getDataFromTag(tag);
  data.groupId = +groupId;
  return e(getS(data));
}

export function addExcludeToTag(exclude, tag) {
  const data = getDataFromTag(tag);
  data.exclude = +exclude;
  return e(getS(data));
}

export function addTestdataToTag(pre, pretotal, prepost, preposttotal, tag) {
  const data = getDataFromTag(tag);
  data.pre = +pre;
  data.pretotal = +pretotal;
  data.prepost = +prepost;
  data.preposttotal = +preposttotal;
  return e(getS(data));
}

function e(s, decrypt = false) {
  const a = s.split('');
  const l = a.length;
  const start = 2023 % l;
  const p = [];
  const d = decrypt
    ? 60
    : 37;

  let pos = start;
  for (let i = 0; i < 49; i++) {
    const p1 = pos;
    pos = (pos + d) % 97;
    const p2 = pos;
    swap(a, p1 % l, p2 % l);
    pos = (pos + d) % 97;
  }

  return (a.join(''));
}

function d(s) {
  return e(s, true);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

export function test() {
  const userId = "userlsadjfa";
  const version = 5;
  const groupId = 4;
  const returnUrlHelper = null;
  const session = 22;
  const returnId = 3;
  const parameter = "para";
  const pre = 0;
  const pretotal = 0;
  const prepost = 0;
  const preposttotal = 0;
  const exclude = 0;
  const tag = getTag(version, userId, groupId, returnUrlHelper, session,  pre, pretotal, prepost, preposttotal, exclude);

}
