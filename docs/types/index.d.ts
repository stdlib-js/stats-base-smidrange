/*
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Interface describing `smidrange`.
*/
interface Routine {
	/**
	* Computes the mid-range of a single-precision floating-point strided array.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = smidrange( x.length, x, 1 );
	* // returns 0.0
	*/
	( N: number, x: Float32Array, strideX: number ): number;

	/**
	* Computes the mid-range of a single-precision floating-point strided array using alternative indexing semantics.
	*
	* @param N - number of indexed elements
	* @param x - input array
	* @param strideX - stride length
	* @param offsetX - starting index
	* @returns mid-range
	*
	* @example
	* var Float32Array = require( '@stdlib/array-float32' );
	*
	* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
	*
	* var v = smidrange.ndarray( x.length, x, 1, 0 );
	* // returns 0.0
	*/
	ndarray( N: number, x: Float32Array, strideX: number, offsetX: number ): number;
}

/**
* Computes the mid-range of a single-precision floating-point strided array.
*
* @param N - number of indexed elements
* @param x - input array
* @param strideX - stride length
* @returns mid-range
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = smidrange( x.length, x, 1 );
* // returns 0.0
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, -2.0, 2.0 ] );
*
* var v = smidrange.ndarray( x.length, x, 1, 0 );
* // returns 0.0
*/
declare var smidrange: Routine;


// EXPORTS //

export = smidrange;
