/*
 * HeatGrid
 * Copyright (C) 2011  Andrew E. Bruno <aeb@qnot.org>
 *
 * Gradient functionality ported from Java Heat Map written by Matthew Beckler.
 * See http://www.mbeckler.org/heatMap/
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var HeatGrid=function(){var j=f([160,0,0],[255,255,0],500);var e=f([0,0,255],[255,0,0],500);var b=f([0,0,0],[255,255,255],500);var l=f([255,0,0],[0,255,0],500);var i=d([[0,255,0],[255,255,0],[255,165,0],[255,0,0]],500);var g=d([[181,32,255],[0,0,255],[0,255,0],[255,255,0],[255,165,0],[255,0,0]],500);var c=d([[0,0,0],[87,0,0],[255,0,0],[255,165,0],[255,255,0],[255,255,255]],500);var k=d([[0,0,0],[105,0,0],[192,23,0],[255,150,38],[255,255,255]],500);var a=d([[255,0,0],[255,165,0],[255,255,0]],500);function h(p,J,A){if(!(Object.prototype.toString.call(J)==="[object Array]")){throw new Error("data must be an array")}var w=A.rows*A.cols;var n=p;if(typeof p=="string"){n=document.getElementById(p)}if(!n.getContext){throw new Error("must provide a canvas element to draw on")}if(J.length!=w){throw new Error("rows * cols must be equal to the size of your data array")}var m=k;if(A.gradient){m=A.gradient}var B=A.cols*A.swidth;var y=A.rows*A.sheight;n.width=B;n.height=y;var C=n.getContext("2d");var z=C.createImageData(B,y);var H=z.data;var t=0;var s=0;for(var u=1;u<=w;u++){var D=J[u-1];var q=Math.floor(D*(m.length-1));var E=m[q];for(var G=0;G<A.sheight;G++){var v=t+G;for(var F=0;F<A.swidth;F++){var I=s+F;H[((v*(z.width*4))+(I*4))+0]=E[0];H[((v*(z.width*4))+(I*4))+1]=E[1];H[((v*(z.width*4))+(I*4))+2]=E[2];H[((v*(z.width*4))+(I*4))+3]=255}}s+=A.swidth;if((u%A.cols)==0){t+=A.sheight;s=0}}z.data=H;C.putImageData(z,0,0)}function f(s,z,w){var o=s[0];var m=s[1];var x=s[2];var n=z[0];var A=z[1];var t=z[2];var q=0;var v=0;var y=0;var u=new Array(w);var p;for(var r=0;r<w;r++){u[r]=new Array(3);p=r/w;u[r][0]=(o+p*(n-o));u[r][1]=(m+p*(A-m));u[r][2]=(x+p*(t-x))}return u}function d(n,r){var m=n.length-1;var p=0;var t=new Array(r);var o;if(m<=0){throw new Error("You must pass in at least 2 colors in the array!")}for(var s=0;s<m;s++){o=f(n[s],n[s+1],Math.round(r/m));for(var q=0;q<o.length;q++){t[p++]=o[q]}}if(p<r){for(;p<r;p++){t[p]=n[n.length-1]}}return t}return{GRADIENT_MAROON_TO_GOLD:j,GRADIENT_BLUE_TO_RED:e,GRADIENT_BLACK_TO_WHITE:b,GRADIENT_RED_TO_GREEN:l,GRADIENT_GREEN_YELLOW_ORANGE_RED:i,GRADIENT_RAINBOW:g,GRADIENT_HOT:c,GRADIENT_HEAT:k,GRADIENT_ROY:a,draw:h,createGradient:f,createMultiGradient:d}}();
