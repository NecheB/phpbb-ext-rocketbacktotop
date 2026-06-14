<?php
/**
 *
 * Rocket Back To Top. An extension for the phpBB Forum Software package.
 *
 * @copyright (c) 2026 Nechev
 * @license GNU General Public License, version 2 (GPL-2.0)
 *
 */

namespace nechev\rocketbacktotop\event;

use phpbb\event\data;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Event listener.
 */
class listener implements EventSubscriberInterface
{
	/**
	 * Assign functions defined in this class to event listeners in the core.
	 *
	 * @return array
	 */
	public static function getSubscribedEvents()
	{
		return [
			'core.user_setup' => 'load_language',
		];
	}

	/**
	 * Load extension language file.
	 *
	 * @param data $event The event object
	 * @return void
	 */
	public function load_language(data $event)
	{
		$lang_set_ext = $event['lang_set_ext'];
		$lang_set_ext[] = [
			'ext_name' => 'nechev/rocketbacktotop',
			'lang_set' => 'common',
		];
		$event['lang_set_ext'] = $lang_set_ext;
	}
}
