/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
	Path,
	SVG,
} = wp.components;
const {
	RichText,
} = wp.blockEditor;

/**
 * Block edit function
 */
export default function save({
	attributes
}) {
	const {
		url,
		label,
		link,
		target,
		size,
		uppercase,
		iconPositionAfter,
		opensInNewTab,
		lineHeight,
		iconRotation,
		textColor,
		iconColor,
	} = attributes;

	const buttonClasses = classnames('wp-block-ainoblocks-arrow-button__link', {
		'is-uppercase': uppercase,
		'icon-after': iconPositionAfter,
	});

	const iconClasses = classnames('wp-block-ainoblocks-arrow-button__icon');

	const iconStyles = {
		transform: iconRotation ? `rotate(${iconRotation}deg)` : undefined,
		fill: iconColor,
	};

	const linkStyles = {
		color: textColor,
		lineHeight: lineHeight ? lineHeight : undefined,
	};

	return (
		<div
		className={classnames(
			'wp-block-ainoblocks-arrow-button', size,
		)}
		>
		{ ! iconPositionAfter && (
			<span className={iconClasses} style={iconStyles}>
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
					<Path d="M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z"></Path>
				</SVG>
			</span>
		) }
		<RichText.Content
			tagName='a'
			value={ label }
			className={ buttonClasses }
			style={ linkStyles }
			href={ link }
			target={ target }
			rel ='noopener noreferrer'
		/>
			{ iconPositionAfter && (
			<span className={iconClasses} style={iconStyles}>
				<SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
					<Path d="M7.82 43l-2.82-2.82 31.18-31.18h-23.18v-4h30v30h-4v-23.18z"></Path>
				</SVG>
			</span>
		) }
		</div>
	);
}

