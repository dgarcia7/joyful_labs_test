require "test_helper"

class OnePagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get one_pages_index_url
    assert_response :success
  end
end
