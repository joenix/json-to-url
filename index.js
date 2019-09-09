/* !!
 * Code By: Joenix // 2017.09.07
 * ===== ===== =====
 * Parse Json To Url Query
 * ===== ===== =====
 */
module.exports = function (data, mode)
{

	if ( !(data instanceof Object) ) {
		return data;
	}

	data = JSON.stringify( data );

	if (mode == true) {
		return data;
	}

	return (function (exp) {

		data = data.replace(exp.wild, function (word, $1, $2, $3, $4, $5) {
			return [$2, '=', $5].join('');
		});

		return data.replace(exp.trim, '').replace(exp.place, '&');
	})
	(
		// Exp
		{
			// Wild
			wild: new RegExp(/(")?([\w\-\!\@\#\$\%\^\&\*\+\(\)\{\}\[\]\:\;\,\.]+)(")?:(")?([\w\-\!\@\#\$\%\^\&\*\+\(\)\{\}\[\]\:\;\,\.]+)(")?/g),
			// Trim
			trim: new RegExp(/^{|}$/g),
			// Place
			place: new RegExp(/\,/g)
		}
	);

}
