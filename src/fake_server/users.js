"use strict";
/**
 * Project: learning-react-redux
 * Author: Le Hai Diep(dieple)
 * Date-Time: 18/09/2019-22:51
 */


export function users() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          username: 'peter'
        },
        {
          id: 2,
          username: 'jame'
        }
      ]);
    }, 5000);
  });
}
