<?

class Google_Web_Fonts_Manager_Admin extends Google_Web_Fonts_Manager {
	/**
	 * Error messages to diplay
	 *
	 * @var array
	 */
	private $_messages = array();
	

	
	
	/**
	 * Class constructor
	 *
	 */
	public function __construct() {
		$this->_plugin_dir   = DIRECTORY_SEPARATOR . str_replace(basename(__FILE__), null, plugin_basename(__FILE__));
		$this->_settings_url = 'options-general.php?page=' . plugin_basename(__FILE__);;
		
		$this->setup_css_imports();

		$allowed_options = array(
			
	);
		
		
		if(array_key_exists('option_name', $_GET) && array_key_exists('option_value', $_GET)
			&& in_array($_GET['option_name'], $allowed_options)) {
			update_option($_GET['option_name'], $_GET['option_value']);
			
			header("Location: " . $this->_settings_url);
			die();	
		
		} else {
			// register installer function
			register_activation_hook(GFM_LOADER, array(&$this, 'activateFontManager'));
			
			// add plugin "Settings" action on plugin list
			add_action('plugin_action_links_' . plugin_basename(GFM_LOADER), array(&$this, 'add_plugin_actions'));
			
			// add links for plugin help, donations,...
			add_filter('plugin_row_meta', array(&$this, 'add_plugin_links'), 10, 2);
			
			// push options page link, when generating admin menu
			add_action('admin_menu', array(&$this, 'adminMenu'));
	
		}
	}
	
	/**
	 * Add "Settings" action on installed plugin list
	 */
	public function add_plugin_actions($links) {
		array_unshift($links, '<a href="options-general.php?page=' . plugin_basename(__FILE__) . '">' . __('Settings') . '</a>');
		
		return $links;
	}
	
	/**
	 * Add links on installed plugin list
	 */
	public function add_plugin_links($links, $file) {
		if($file == plugin_basename(TW_LOADER)) {
			$links[] = '<a href="http://MyWebsiteAdvisor.com">Premium Plugins</a>';
		}
		
		return $links;
	}
	
	/**
	 * Add menu entry 
	 */
	public function adminMenu() {		
		// add option in admin menu, for setting options
		$plugin_page = add_options_page('Google Web Fonts Manager', 'Google Web Fonts Manager', 8, __FILE__, array(&$this, 'optionsPage'));


	}
	

	

	
	/**
	 * Display options page
	 */
	public function optionsPage() {
		// if user clicked "Save Changes" save them
		if(isset($_POST['Submit'])) {
			foreach($this->_options as $option => $value) {
				if(array_key_exists($option, $_POST)) {
					update_option($option, $_POST[$option]);
				} else {
					update_option($option, $value);
				}
			}

			$this->_messages['updated'][] = 'Options updated!';
		}

	
		
	
		foreach($this->_messages as $namespace => $messages) {
			foreach($messages as $message) {
?>
<div class="<?php echo $namespace; ?>">
	<p>
		<strong><?php echo $message; ?></strong>
	</p>
</div>
<?php
			}
		}
?>
<script type="text/javascript">var wpurl = "<?php bloginfo('wpurl'); ?>";</script>
<div class="wrap">
	<div id="icon-options-general" class="icon32"><br /></div>
	<h2>Google Web Fonts Manager</h2>

	<form method="post" action="">

	<? $selected_fonts = $this->get_option('selected_fonts'); ?>
	<? $google_api_key = $this->get_option('google_api_key'); ?>

	Google API Developer Key: <input size='60' type="text" name="google_api_key" value="<? echo $google_api_key; ?>"> <a target='_blank' href='https://code.google.com/apis/console'>Click Here to Get Your Key!</a>

	<? if(isset($google_api_key) && ($google_api_key != '')){ ?>

	<h3>Select fonts below and click the save button to activate a font for your website!</h3>

	<p>Once you have selected a font, use it in your CSS to change the font for anything!  Use the font-family tag just like with any standard font.</p>
		
			
			<a href = 'http://www.google.com/webfonts' target='_blank'>Browse fonts on Google Fonts</a>

			<p class="submit">
				<input type="submit" name="Submit" class="button-primary" value="Save Changes" />
			</p>

			Note: If the new fonts do not appear when you click save, wait a few seconds and reload the page or click save again.

			<?
			session_start();
			$_SESSION['font_select_form'] = $this->get_google_fonts();
			?>

			<? echo $_SESSION['font_select_form']; ?>


		<? } ?>
			<p class="submit">
				<input type="submit" name="Submit" class="button-primary" value="Save Changes" />
			</p>


		

		</form>
		
		
		

</div>
<?php
	}


	function setup_css_imports(){
	
		$selected_fonts = $this->get_option('selected_fonts');
	
		foreach($selected_fonts as $font){
			$google_url = "http://fonts.googleapis.com/css?family=" . $font;
			$google_url = $google_url;
	
			wp_enqueue_style($font, $google_url);	
		}
	}



	function get_google_fonts(){
	
		$test_string = "Grumpy wizards make toxic brew for the evil Queen and Jack.";
	
		$google_api_key  = $this->get_option('google_api_key');
			
		$api_url = "https://www.googleapis.com/webfonts/v1/webfonts?key=";
			
		$font_list_data = file_get_contents($api_url . $google_api_key);
	
		$font_list = json_decode($font_list_data);
	
	
		$selected_fonts = $this->get_option('selected_fonts');
	
		$input_html = "<h4>" . count($selected_fonts) ." of " . count($font_list->items) . " fonts selected!</h4>";
	
		$css_data = "<style type='text/css' media='screen'>";
	
		foreach($font_list->items as $font){
	
				$link_url = "http://www.google.com/webfonts/specimen/" . urlencode($font->family);
				$font_name =  $font->family;
				$font_family = "$font_name";
	
				if(in_array($font_name, $selected_fonts)){
					$input_html .= "<p><input type='checkbox' name='selected_fonts[]' value='$font_name'  checked='checked' >";
					$font_name = $font->family;
					$input_html .= "<span class='$font_family' style='padding:5px; font-size:24px; font-family:$font_family'> " . $font_name . " - " . $test_string ."</span></p>";
				}else{
					$input_html .= "<p><input type='checkbox' name='selected_fonts[]' value='$font_name'>";
					$input_html .= "<span  class='$font_family' > " . $font_name  . "</span></p>";
				}
	
	
				$font_name = ereg_replace(" ", "-", $font->family);
				
		}
	
		$css_data .= "</style>";
		
		return $input_html;
	
	
	}



}

$font_manager = new Google_Web_Fonts_Manager_Admin();
?>