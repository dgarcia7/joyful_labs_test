require "test_helper"

class TwoPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get two_pages_index_url
    assert_response :success
  end
end
