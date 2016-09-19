require 'rails_helper'

RSpec.describe Event, :type => :model do

  describe "attribute" do

    subject {FactoryGirl.attributes_for(:event) }

    describe "date" do
      it "must be given" do
        subject["date"] = ""
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "time" do
      it "must be given" do
        subject["time"] = ""
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "name" do
      it "must be given" do
        subject["name"] = ""
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "description" do
      it "must be given" do
        subject["description"] = "66406404764113331553
                                  32159016066543161378
                                  30030389566289064044
                                  74703645527509432227
                                  67810272783142154977
                                  01868449675597366151
                                  81551067943534037425
                                  72413775400607149586
                                  25559395610133714920
                                  81044681404485571752
                                  80062234800292915425
                                  79244100713331152084
                                  07633070688099710957
                                  96375943499246973362
                                  22263017942140517121
                                  05034918225278102156
                                  60773617043231641545
                                  65299191285312412150
                                  91983820196109052254
                                  02115114447397831736"
        expect(Event.new(subject)).not_to be_valid
      end
    end

    describe "people_amount" do
      it "must be given" do
        subject["people_amount"] = "0"
        expect(Event.new(subject)).not_to be_valid
      end
    end

  end

end
