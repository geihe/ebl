import {Base64} from "js-base64";

function getS(data) {
  return Base64.encodeURI(JSON.stringify(data));
}

export function getTag(version=0, userId = '', groupId = '', returnUrlHelper, session=1) {
  const {id: returnId, parameter} = returnUrlHelper?.getReturnData();

  return e(getS({version, userId, groupId, session, returnId, parameter}));
}

export function getDataFromTag(tag) {
  const json = Base64.decode(d(tag));
  return JSON.parse(json);
}

export function addToTag(groupId, tag) {
  const data = getDataFromTag(tag);
  data.groupId = +groupId;
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
