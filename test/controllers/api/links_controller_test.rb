require 'test_helper'

class Api::LinksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_links_index_url
    assert_response :success
  end

end
